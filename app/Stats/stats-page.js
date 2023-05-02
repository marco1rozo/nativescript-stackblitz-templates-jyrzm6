import { BrowseViewModel } from './stats-view-model'

export function onNavigatingTo(args) {
  const component = args.object
  component.bindingContext = new StatsViewModel()
}
