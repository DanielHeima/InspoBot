import { View, Image, Dimensions, StyleSheet, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData, NativeScrollEvent } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Convo, ConvoBubble } from '@/src/types/model';
import { useEffect, useRef, useState } from 'react';
import { useThemeColor } from '@/src/hooks/useThemeColor';
import { useDownArrowAssetURI } from '@/src/hooks/useDownArrowAssetUri';
import { ConversationBubbles } from './ConversationBubbles';
import { DownArrow } from '../icons/DownArrow';

export function Conversation({ convo, convoBubbles }: { convo: Convo, convoBubbles: ConvoBubble[] }) {
  const scrollViewRef = useRef<ScrollView>(null);
  const textInputRef = useRef<TextInput>(null);
  const [isTypeIndicatorEnabled, setIsTypeIndicatorEnabled] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const [bubbles, setBubbles] = useState<ConvoBubble[]>(convoBubbles);

  const primaryColor = useThemeColor('primary');
  const backgroundColor = useThemeColor('background');
  const textColor = useThemeColor('text');
  const secondaryColor = useThemeColor('secondary');
  const ternaryColor = useThemeColor('ternary');
  const iconColor = useThemeColor('icon');


  const scrollToEnd = () => {
    setShowDownArrow(false);
    scrollViewRef.current?.scrollToEnd({ animated: true })
    setTimeout(() => setShowDownArrow(false), 300);
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
    setShowDownArrow(layoutMeasurement.height + contentOffset.y <= contentSize.height - windowHeight / 2);
  }

  const arrowUri = Image.resolveAssetSource(useDownArrowAssetURI()).uri;

  return <>
    <ScrollView
      style={{ backgroundColor: backgroundColor }}
      contentContainerStyle={styles.container}
      ref={scrollViewRef}
      onScroll={onScroll}
      scrollEventThrottle={50}
    >
      <ConversationBubbles convo={convo} convoBubbles={bubbles} typeIndicatorEnabled={isTypeIndicatorEnabled} />
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

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10
  },
  convoBubble: {
    margin: 5,
    maxWidth: '80%',
    padding: 30,
    borderRadius: 50,
  },
  byBot: {
    alignSelf: 'flex-start'
  },
  byUser: {
    alignSelf: 'flex-end'
  }
})
