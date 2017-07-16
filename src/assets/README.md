# Assets

## What are Assets?
Assets are resources which are used by your Rocketlet in a publicly accessible manner. These resources are not consumed by the server but instead are items which are used by Contextual Bar Buttons, Slash Commands, and other items.

## How do I include them in my Rocketlet?
Specify the `assetsFolder` field in your Rocketlet's manifest file, `rocketlet.json`. However if this field is not supplied, we will treat files in the `assets` directory of your Rocketlet package as assets if it exists.

## Will these assets be compiled?
_To be determined._ However, at the moment: __no__. If you are working with TypeScript in your assets, please ensure they are compiled down to JavaScript that the browser clients can understand.

## Do all assets have to be registered?
No. However, if you want to refer to these assets in a Contextual Bar Button then yes you must register the asset which is going to be displayed.
