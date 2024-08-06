/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722931993", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-purple-900 to-blue-900 flex-1 py-16">
        <div id="cta-inner-container" class="max-w-screen-xl px-6 mx-auto">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 transition-all duration-300 hover:bg-opacity-20">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-white">Discover Sui Transactions in Real-Time</h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-8">
                    <p id="cta-subtitle" class="flex-1 font-light text-gray-300 md:text-lg">Stay ahead of the curve with instant alerts on new Sui blockchain activities</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg">Start Tracking Now</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
