/// <reference path="definitions/jquery/jquery.d.ts"/>

namespace app.menu {

    export class Loader {

        private images: Array<{}> = [];
        private imagesLoaded: number;
        public onLoadAllCallback: Function;

        init(): this{

            this
                .cacheElements()
                .bindings();

            return this;
        }


        private cacheElements(): this {

            this.imagesLoaded = 1;
            $( 'body' )
            .find( '[data-loadimage]' )
            .each( (index, value) => {
                
                this.images
                    .push( $( value )
                    .data( 'loadimage' ) );
            } );

            return this;
        }

        private bindings(): this {

            this.images.forEach( ( src ) => {

                var img: any = new Image();
                img.src = src;
                img.onload = () => { this.onLoadImage(); };
                img.onerror = () => { this.onLoadImage(); }
            });
            return this;
        }

        private onLoadImage(){

            this.imagesLoaded++;
            if( this.imagesLoaded >= this.images.length){

                if (typeof this.onLoadAllCallback == "function") {
                    this.onLoadAllCallback();
                }
            }
        }
    }
}