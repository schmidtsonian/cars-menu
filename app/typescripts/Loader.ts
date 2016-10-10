/// <reference path="definitions/jquery/jquery.d.ts"/>

namespace app {

    export class Loader {

        private images: Array<{}> = [];

        init(): this{

            this
                .cacheElements()
                .bindings();

            return this;
        }

        private cacheElements(): this {

            return this;
        }

        private bindings(): this {

            return this;
        }
    }
}