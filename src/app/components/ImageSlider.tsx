"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Images défilantes en arrière-plan
const images = ["/bgimage.png", "/bgimage2.png", "/bgimage3.png"];

// Types d'animations possibles
type TransitionType = "fade" | "zoom" | "slide-left" | "slide-right";

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<TransitionType>("fade");

  // Fonction pour obtenir un type de transition aléatoire
  const getRandomTransition = (): TransitionType => {
    const transitions: TransitionType[] = ["fade", "zoom", "slide-left", "slide-right"];
    return transitions[Math.floor(Math.random() * transitions.length)];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Commencer la transition
      setTransitioning(true);
      setNextImageIndex((currentImageIndex + 1) % images.length);
      setTransitionType(getRandomTransition());
      
      // Après 1.5 secondes, terminer la transition et passer à l'image suivante
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setTransitioning(false);
      }, 1500);
    }, 3000); // Changer l'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, [currentImageIndex, nextImageIndex]);

  // Classes CSS pour les différentes transitions
  const getTransitionClasses = (isActive: boolean, isNext: boolean) => {
    if (!transitioning) {
      return isActive ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-110 translate-x-full";
    }
    
    if (isActive) {
      // Image actuelle qui sort
      switch (transitionType) {
        case "fade":
          return "opacity-0 scale-100 translate-x-0 duration-1500";
        case "zoom":
          return "opacity-0 scale-125 translate-x-0 duration-1500";
        case "slide-left":
          return "opacity-0 -translate-x-full scale-100 duration-1500";
        case "slide-right":
          return "opacity-0 translate-x-full scale-100 duration-1500";
      }
    } else if (isNext) {
      // Prochaine image qui entre
      switch (transitionType) {
        case "fade":
          return "opacity-100 scale-100 translate-x-0 duration-1500";
        case "zoom":
          return "opacity-100 scale-100 translate-x-0 duration-1500";
        case "slide-left":
          return "opacity-100 translate-x-0 scale-100 duration-1500";
        case "slide-right":
          return "opacity-100 translate-x-0 scale-100 duration-1500";
      }
    }
    
    return "opacity-0";
  };

  // Classes initiales selon le type de transition
  const getInitialClasses = (isNext: boolean) => {
    if (!isNext) return "opacity-0";
    
    switch (transitionType) {
      case "fade":
        return "opacity-0 scale-100";
      case "zoom":
        return "opacity-0 scale-90";
      case "slide-left":
        return "opacity-0 translate-x-full";
      case "slide-right":
        return "opacity-0 -translate-x-full";
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Image actuelle */}
      <div
        className={`absolute inset-0 w-full h-full transition-all transform ${
          getTransitionClasses(true, false)
        }`}
      >
        <Image
          src={images[currentImageIndex]}
          alt={`Background ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Prochaine image (visible uniquement pendant la transition) */}
      {transitioning && (
        <div
          className={`absolute inset-0 w-full h-full transition-all transform ${
            getInitialClasses(true)
          } ${getTransitionClasses(false, true)}`}
        >
          <Image
            src={images[nextImageIndex]}
            alt={`Background ${nextImageIndex + 1}`}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
} 