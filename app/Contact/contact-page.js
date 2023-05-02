import { BrowseViewModel } from './contact-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new ContactViewModel()
}
