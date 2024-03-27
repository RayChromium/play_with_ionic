import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar, 
         IonSplitPane,
         IonMenu,
         IonTabs,
         IonRouterOutlet,
         IonTabBar,
         IonTabButton,
         IonIcon,
         IonLabel,
         IonMenuToggle,
         IonButton,
         IonList,
         IonItem,
         IonGrid, 
         IonRow,
         IonCol,
         IonButtons,
         IonMenuButton } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { chatbox, extensionPuzzle, settings} from 'ionicons/icons';
import React from 'react';
import MenuTabs from './MenuTabs';
import SideMenuTab from './SideMenuTab';

const ChatHistory: React.FC = () => {

    return (
        <IonPage>
            <IonSplitPane contentId="main">
            <SideMenuTab />

                <div className="ion-page" id="main">
                  <IonHeader>
                    <IonToolbar>
                    <IonButtons slot="start">
                      <IonMenuButton></IonMenuButton>
                    </IonButtons>
                      <IonTitle>Main View</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent className="ion-padding">Main View Content</IonContent>
                </div>
            </IonSplitPane>
        </IonPage>
    );
};

export default ChatHistory;