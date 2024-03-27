import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenu, IonButtons, IonButton } from '@ionic/react';
import React from 'react';
import MenuTabs from './MenuTabs'

const SideMenuTab: React.FC = () => {

    return (
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

                  
                
              </IonContent>
            </IonMenu>
    );
};

export default SideMenuTab;