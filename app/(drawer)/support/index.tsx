import { Button } from "react-native";
import { DrawerScreen } from "@/src/components/screen/DrawerScreen";
import { ThemedText } from "@/src/components/themed/ThemedText";
import { ThemedView } from "@/src/components/themed/ThemedView";
import { useLabel } from "@/src/hooks/useLabel";
import { Link } from "expo-router";
import { useContext } from "react";
import { LanguageContext } from "@/src/context";

export default function Page() {
  const lang = useContext(LanguageContext).language;
  return (
    <ThemedView style={{ width: '100%', height: '100%', padding: 20 }}>
      <DrawerScreen headerRightShown={true} showLangToggle={true} showThemeToggle={true} title={useLabel('navSupport')} />
      <ThemedText style={{ marginBottom: 20 }} type={'title'}>{useLabel('supportThanks')}</ThemedText>
      <ThemedText>{useLabel('supportThanksSub')}</ThemedText>
      <ThemedText style={{ marginTop: 40 }}>{useLabel('supportCoffeeLinkDesc')}</ThemedText>
      <Link href={'https://buymeacoffee.com/danielheima'}>
        <ThemedText light="lightblue" dark="lightblue">@Buy me a coffee</ThemedText>
      </Link>
      <ThemedText style={{ marginTop: 40, marginBottom: 20 }}>{useLabel('supportWatchAd')}</ThemedText>
      {lang === "en" ? <Button title="Watch ad"></Button> : <Button title="Horfa á auglýsingu"></Button>}
      <ThemedView style={{ width: '100%', height: 1, marginTop: 50, marginBottom: 20}} lightBackground={'gray'} darkBackground={'white'}></ThemedView>
      <ThemedText style={{ marginTop: 20, marginBottom: 20 }}>{useLabel('supportFoundBug')}</ThemedText>
      <ThemedText type={"subtitle"}>{useLabel('supportRaiseIssue')}</ThemedText>
      <Link href={'https://github.com/DanielHeima/InspoBot'}>
        <ThemedText light="lightblue" dark="lightblue" type={'subtitle'}>https://github.com/DanielHeima/InspoBot</ThemedText>
      </Link>
    </ThemedView>
  );
}
