import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSplitPane, IonList, IonItem, IonLabel, IonMenu, IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import MenuTabs from './MenuTabs';
import { earthOutline, chatbubblesOutline, folderOutline, wifiOutline, terminalOutline} from 'ionicons/icons';

const Build: React.FC = () => {


  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
              <IonHeader>
                <IonToolbar color="tertiary">
                  <IonTitle>VoyagerLogo</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                  <MenuTabs />

                  
                  <IonList inset={true}>
                    <IonItem>
                      <IonIcon slot="start" icon={chatbubblesOutline}></IonIcon>
                      <IonLabel>Manage Assistants</IonLabel>
                    </IonItem>
                  </IonList>
                  Data Sources
                  <IonList inset={true}>
                      <IonItem>
                        <IonIcon slot="start" icon={wifiOutline}></IonIcon>
                        <IonLabel>Connections</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonIcon slot="start" icon={folderOutline}></IonIcon>
                        <IonLabel>Folders</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonIcon slot="start" icon={earthOutline}></IonIcon>
                        <IonLabel>Websites</IonLabel>
                      </IonItem>
                  </IonList>
                  Developers
                  <IonList inset={true}>
                    <IonItem>
                      <IonIcon slot="start" icon={terminalOutline}></IonIcon>
                      <IonLabel>Developer Tools</IonLabel>
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
              <IonTitle>Builder Example</IonTitle>
            </IonToolbar>
          </IonHeader>
        </div>
      </IonSplitPane>
      
    </IonPage>
  );
};

export default Build;
