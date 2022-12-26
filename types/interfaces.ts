import {color, suitSection} from '~/types/enums'

export interface fullSuitInterface{
  jacket: color,
  inner: color,
  trousers: color
}

export interface selectionInterface {
  suitSection: suitSection,
  color: color
}