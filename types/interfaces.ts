import {color, suitSection} from '~/types/enums'

export interface fullSuitInterface{
  jacket: color,
  shirt: color,
  trousers: color
}

export interface selectionInterface {
  suitSection: suitSection,
  color: color
}