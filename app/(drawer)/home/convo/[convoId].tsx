import { useLocalSearchParams } from 'expo-router';
import { ConvoHrefSearchParams } from '@/src/types/convo';
import { Convo, ConvoBubble, User } from '@/src/types/model';
import { randomUUID } from 'expo-crypto';
import { Conversation } from '@/src/components/convo/Conversation';
import { StackScreen } from '@/src/components/screen/StackScreen';

export default function ConvoScreen() {
  let { convoId, botType } = useLocalSearchParams<ConvoHrefSearchParams>();
  
  const pageTitle = `AI ${botType} chat`;

  if (convoId === 'new' || !convoId) {
    convoId = randomUUID();
  }
  console.log(convoId);

  if (!botType) {
    botType = 'therapist'
  }

  const dummyUser: User = {
    id: randomUUID(),
    name: 'Daníel Helgi Ágústsson'
  }

  const convo: Convo = {
    id: convoId,
    botType: 'therapist',
    user: dummyUser
  }

  const convoBubbles: ConvoBubble[] = [
    {
      convoId,
      createdAt: new Date("2024-07-04T12:51:21.817Z"),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      byUser: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T12:50:21.817Z"),
      text: 'Hello. How may I help you?',
      byBot: true
    },
    {
      convoId,
      createdAt: new Date("2024-07-04T12:52:21.817Z"),
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      byBot: true
    }
  ]
  //   {
  //     convoId,
  //     createdAt: new Date("2024-07-04T12:53:21.817Z"),
  //     text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     byUser: true
  //   },
  //   {
  //     convoId,
  //     createdAt: new Date("2024-07-04T12:54:21.817Z"),
  //     text: 'Hello. How may I help you?',
  //     byBot: true
  //   },
  //   {
  //     convoId,
  //     createdAt: new Date("2024-07-04T12:55:21.817Z"),
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     byUser: true
  //   },
  //   {
  //     convoId,
  //     createdAt: new Date("2024-07-04T12:56:21.817Z"),
  //     text: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  //     byBot: true
  //   },
  //   {
  //     convoId,
  //     createdAt: new Date("2024-07-04T13:02:21.817Z"),
  //     text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     byUser: true
  //   },
  // ]

  return (
    <>
      <StackScreen title={pageTitle} headerRightShown={false} />
      <Conversation convo={convo} convoBubbles={[]} />
    </>
  );
}
