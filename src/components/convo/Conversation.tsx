import { View, Image, Dimensions, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData, NativeScrollEvent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Convo, ConvoBubble } from '@/src/types/model';
import { useEffect, useRef, useState } from 'react';
import { useThemeColor, useThemeColors } from '@/src/hooks/useThemeColor';
import { useDownArrowAssetURI } from '@/src/hooks/useDownArrowAssetUri';
import { ConversationBubbles } from './ConversationBubbles';
import { DownArrow } from '../icons/DownArrow';
import { styles } from './ConvoStyles';
import { useExternalBotConvo } from '@/src/hooks/useExternalBotConvo';
import { compareBubbles } from '@/src/utils';
import { ThemedText } from '../themed/ThemedText';
import { useFirstPromptByBotType } from '@/src/hooks/useFirstPromptByBotType';
import { useLabel } from '@/src/hooks/useLabel';

export function Conversation({ convo, convoBubbles }: { convo: Convo, convoBubbles: ConvoBubble[] }) {
  // refs
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);

  // state
  const [showDownArrow, setShowDownArrow] = useState(false);
  const [dontToggleDownArrow, setDontToggleDownArrow] = useState(false);
  const [bubbles, setBubbles] = useState<ConvoBubble[]>(convoBubbles.sort(compareBubbles));
  const [prompt, setPrompt] = useState('');

  // hooks
  const { isLoading, response, error } = useExternalBotConvo(prompt, bubbles);
  const firstPrompt = useFirstPromptByBotType(convo.botType);
  const {
    textColor,
    backgroundColor,
    primaryColor,
    ternaryColor } = useThemeColors();

  // procedures
  const scrollToEnd = () => {
    setDontToggleDownArrow(true);
    scrollViewRef.current?.scrollToEnd({ animated: true })
    setTimeout(() => setShowDownArrow(false), 100);
    setTimeout(() => setDontToggleDownArrow(false), 1000);
  }

  const clearTextInput = () => {
    textInputRef.current?.clear();
  }

  // handlers
  const onSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    const { text: newText } = e.nativeEvent;
    if (!newText) {
      return;
    }
    
    scrollToEnd();
    clearTextInput();
    const newBubble: ConvoBubble = {
      convoId: convo.id,
      text: newText,
      byUser: true,
      createdAt: new Date()
    }
    setBubbles((oldBubbles) => {
      return [...oldBubbles, newBubble];
    })

    setPrompt(newText);
  }

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const windowHeight = Dimensions.get('window').height;
    const { contentSize, contentOffset, layoutMeasurement } = e.nativeEvent;
    if (dontToggleDownArrow) {
      return;
    }
    setShowDownArrow(layoutMeasurement.height + contentOffset.y <= contentSize.height - windowHeight / 2);
  }

  // first prompt
  if (bubbles.length === 0 && !prompt) {
    setBubbles([{
      convoId: convo.id,
      createdAt: new Date(),
      byBot: true,
      hidden: true,
      text: firstPrompt
    }])
  }

  useEffect(() => {
    let update = true;
    if (!response) {
      return;
    }
    
    if (!response.message) {
      return;
    }
    
    const newBubble: ConvoBubble = {
      convoId: convo.id,
      text: response.message,
      byBot: true,
      createdAt: new Date()
    }

    if (update) {
      setBubbles((oldBubbles) => {
        if (oldBubbles.length <= 1) {
          return [...oldBubbles, newBubble];
        }
        if (oldBubbles[oldBubbles.length - 1]?.byUser) {
          return [...oldBubbles, newBubble];
        } 
        return oldBubbles
      })
      setTimeout(() => scrollToEnd(), 200);
    }

    return () => { update = false };
  }, [response, convo.id])


  const arrowUri = Image.resolveAssetSource(useDownArrowAssetURI()).uri;

  return <>
    <ScrollView
      style={{ backgroundColor: backgroundColor }}
      contentContainerStyle={styles.container}
      ref={scrollViewRef}
      onScroll={onScroll}
      scrollEventThrottle={50}
    >
      <ConversationBubbles convoBubbles={bubbles} typeIndicatorEnabled={isLoading} />
      {error ? <ThemedText type={'subtitle'} dark={'red'} light={'red'}>{error}</ThemedText> : <></>}
    </ScrollView>
    <View>
      <DownArrow
        isEnabled={showDownArrow}
        color={ternaryColor}
        arrowUri={arrowUri}
        scrollToEnd={scrollToEnd}
      />
      <TextInput
        ref={textInputRef}
        onSubmitEditing={onSubmitEditing}
        style={{
          color: textColor,
          fontSize: 24,
          padding: 10,
          height: 60,
          backgroundColor: primaryColor,
          borderColor: ternaryColor,
          borderWidth: 1,
          borderStyle: 'solid'
        }}
        placeholderTextColor={ternaryColor} placeholder={useLabel('convoPlaceHolder')} />
    </View>
  </>
}
