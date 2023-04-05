import {AssetSource, defineConfig, isDev} from 'sanity'

import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity/schemas'
import {structure} from './sanity/desk'
import { myTheme } from './theme';

import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './sanity/plugins/customDocumentActions'
import Logo from './app/(admin)/studio/[[...index]]/Logo'
import StudioNavbar from './app/(admin)/studio/[[...index]]/StudioNavbar'

const devOnlyPlugins = [visionTool()]
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Mullateam_Content_Studio',
  title: 'Mullateam Content Studio',

  projectId,
  dataset,

  plugins: [
    deskTool({structure}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme,
  form: {
    file: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
})