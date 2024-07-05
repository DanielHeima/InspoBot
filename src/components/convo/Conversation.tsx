import { View, Image, Dimensions, StyleSheet, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData, NativeScrollEvent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Convo, ConvoBubble } from '@/src/types/model';
import { useEffect, useRef, useState } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { useDownArrowAssetURI } from '@/src/hooks/useDownArrowAssetUri';
import { ConversationBubbles } from './ConversationBubbles';
import { DownArrow } from '../icons/DownArrow';
import { styles } from './ConvoStyles';

export function Conversation({ convo, convoBubbles }: { convo: Convo, convoBubbles: ConvoBubble[] }) {
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [isTypeIndicatorEnabled, setIsTypeIndicatorEnabled] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const [dontToggleDownArrow, setDontToggleDownArrow] = useState(false);
  const [bubbles, setBubbles] = useState<ConvoBubble[]>(convoBubbles);

  const primaryColor = useThemeColor('primary');
  const backgroundColor = useThemeColor('background');
  const textColor = useThemeColor('text');
  const secondaryColor = useThemeColor('secondary');
  const ternaryColor = useThemeColor('ternary');
  const iconColor = useThemeColor('icon');


  const scrollToEnd = () => {
    setDontToggleDownArrow(true);
    scrollViewRef.current?.scrollToEnd({ animated: true })
    setTimeout(() => setShowDownArrow(false), 100);
    setTimeout(() => setDontToggleDownArrow(false), 1000);
  }

  const clearTextInput = () => {
    textInputRef.current?.clear();
  }

  useEffect(() => {

  }, [isTypeIndicatorEnabled])


  const onSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    setIsTypeIndicatorEnabled(true);
    scrollToEnd();
    clearTextInput();
    
    console.log(isTypeIndicatorEnabled); // stundum true og stundum false... ekki alltaf að ná að updateast
    const newText = e.nativeEvent.text;
    if (!newText) {
      setIsTypeIndicatorEnabled(false);
      return;
    }
    const newBubble: ConvoBubble = {
      convoId: convo.id,
      text: newText,
      byUser: true,
      createdAt: new Date()
    }

    setBubbles((oldBubbles) => {
      return [...oldBubbles, newBubble]
    })

    setTimeout(() => {
      let botAnswer: ConvoBubble = {
        convoId: convo.id,
        text: newText,
        byBot: true,
        createdAt: new Date()
      };
      if (isTypeIndicatorEnabled) {
        doIt(botAnswer);
        setIsTypeIndicatorEnabled(false);
      }
    }, 1000);
  }
  function doIt(botAnswer: ConvoBubble) {
    console.log(botAnswer);
    setBubbles((oldBubbles) => [...oldBubbles, botAnswer])
  }

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const windowHeight = Dimensions.get('window').height;
    const { contentSize, contentOffset, layoutMeasurement } = e.nativeEvent;
    if (dontToggleDownArrow) {
      return;
    }
    setShowDownArrow(layoutMeasurement.height + contentOffset.y <= contentSize.height - windowHeight / 2);
  }

  const arrowUri = Image.resolveAssetSource(useDownArrowAssetURI()).uri;

  return <>
    <ScrollView
      style={{ backgroundColor: backgroundColor }}
      contentContainerStyle={styles.container}
      ref={scrollViewRef}
      onScroll={onScroll}
      scrollEventThrottle={200}
    >
      <ConversationBubbles convoBubbles={bubbles} typeIndicatorEnabled={isTypeIndicatorEnabled} />
    </ScrollView>
    <View>
      <DownArrow
        isEnabled={showDownArrow}
        color={ternaryColor}
        arrowUri={arrowUri}
        scrollToEnd={scrollToEnd}
      />
      <TextInput ref={textInputRef} onSubmitEditing={onSubmitEditing} style={{ color: textColor, fontSize: 24, padding: 10, height: 60, backgroundColor: primaryColor, borderColor: ternaryColor, borderWidth: 1, borderStyle: 'solid' }} placeholderTextColor={ternaryColor} placeholder={'Type your message here...'} />
    </View>
  </>
}
