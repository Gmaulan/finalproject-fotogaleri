import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './card.css';

function Testcard() {
  return (
    <IonCard>
        <div className="logo-container">
            <IonAvatar>
      <img src="anime.jpg"/>
        </IonAvatar>
        </div>
      <IonCardHeader>
        <IonCardTitle>Name</IonCardTitle>
        <IonCardSubtitle>Galang Maulana</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
}
export default Testcard;