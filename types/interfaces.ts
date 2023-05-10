import { suitSection, suitColors, shirtColors } from '~/types/enums'

export interface fullSuitInterface{
  jacket: suitColors,
  shirt: shirtColors,
  trousers: suitColors
}

export interface selectionInterface {
  suitSection: suitSection,
  color: suitColors | shirtColors
}