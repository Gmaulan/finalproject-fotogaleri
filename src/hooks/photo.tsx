// useCamera.tsx
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

export const useCamera = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const takePhoto = async () => {
    try {
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });
      setPhotos([...photos, capturedPhoto]);
      console.log(photos);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  const deletePhoto = (index: number) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  return {
    photos,
    takePhoto,
    deletePhoto
  };
};