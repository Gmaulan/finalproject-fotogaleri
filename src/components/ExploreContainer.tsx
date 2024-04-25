
import { useCamera } from "../hooks/photo";
import "./ExploreContainer.css";
import React from 'react';
import { IonAvatar } from '@ionic/react';
import { IonButton } from "@ionic/react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';


interface ContainerProps {}

function Example() {
  return (
  <>
    <IonAvatar>
      <img src="anime.jpg" />
    </IonAvatar>
  </>
  );
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  defineCustomElements(window);
  const {takePhoto} = useCamera()
  return (
    <div id="container">
      <h1>HERE TO TAKE PHOTO</h1>
      <IonButton onClick={takePhoto}>Ambil Foto</IonButton>
    </div>
  );
};

export default ExploreContainer;
