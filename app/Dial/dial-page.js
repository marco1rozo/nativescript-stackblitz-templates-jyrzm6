import { BrowseViewModel } from './dial-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new DialViewModel()
}
