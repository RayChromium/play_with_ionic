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
    IonCol} from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { chatbox, extensionPuzzle, settings} from 'ionicons/icons';
import React from 'react';
import Chat from './Chat';
import ChatSetting from './ChatSetting';
import Build from './Build';

const MenuTabs: React.FC = () => {

return (
    <IonMenuToggle auto-hide="false">
      
    <IonGrid>
      
      
      <IonRow>  
        <IonCol>
          <IonItem  href="/home/chat">
            <IonIcon slot="start" icon={chatbox} />
            <IonLabel>Chat</IonLabel>
          </IonItem>
        </IonCol>
        <IonCol>
          <IonItem  href="/home/build">
            <IonIcon slot="start" icon={extensionPuzzle} />
            <IonLabel>Build</IonLabel>
          </IonItem>
        </IonCol>
        
        <IonCol>
          <IonItem  href="/home/chatSetting">
            <IonIcon slot="start" icon={settings} />
            {/* <IonLabel>Chat Setting</IonLabel> */}
          </IonItem>
        </IonCol>
        
      </IonRow>
      
      </IonGrid>
    </IonMenuToggle>
);
};

export default MenuTabs;