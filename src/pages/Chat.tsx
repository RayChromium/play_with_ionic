import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonSplitPane, IonMenu, IonModal, IonInput } from '@ionic/react';
import React, { useState, useRef } from 'react';
import SideMenuTab from './SideMenuTab';
import MenuTabs from './MenuTabs'
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';

const Chat: React.FC = () => {

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }
  return (
    <IonPage>
      <IonSplitPane contentId="main">
            {/* <SideMenuTab /> */}
            <IonMenu contentId="main">
              <IonHeader>
                <IonToolbar color="tertiary">
                  <IonTitle>VoyagerLogo</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                
                  <MenuTabs />
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonButton>Start</IonButton>
                    </IonButtons>
                    <IonButtons slot="end">
                      <IonButton>End</IonButton>
                    </IonButtons>
                  </IonToolbar>

                  
                  <IonList inset={true}>
                            <IonItem>
                              <IonLabel>Pokémon Yellow</IonLabel>
                            </IonItem>
                            <IonItem>
                              <IonLabel>Mega Man X</IonLabel>
                            </IonItem>
                            <IonItem>
                              <IonLabel>The Legend of Zelda</IonLabel>
                            </IonItem>
                            <IonItem>
                              <IonLabel>Pac-Man</IonLabel>
                            </IonItem>
                            <IonItem>
                              <IonLabel>Super Mario World</IonLabel>
                            </IonItem>
                </IonList>
              </IonContent>
            </IonMenu>
            
            <div className="ion-page" id="main">
              <IonHeader>
                <IonToolbar color={'success'}>
                  <IonButtons slot="start">
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle>Chats and Assistants</IonTitle>
                </IonToolbar>
              </IonHeader>

              <IonContent>
              <IonButton id="open-modal">
                  Open Something
              </IonButton>
              <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
                <IonHeader>
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>Welcome</IonTitle>
                    <IonButtons slot="end">
                      <IonButton strong={true} onClick={() => confirm()}>
                        Confirm
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                  <IonItem>
                    <IonInput
                      label="Enter your name"
                      labelPlacement="stacked"
                      ref={input}
                      type="text"
                      placeholder="Your name"
                    />
                  </IonItem>
                </IonContent>
              </IonModal>
              </IonContent>
          </div>
      </IonSplitPane>
    </IonPage>
  );
};

export default Chat;
