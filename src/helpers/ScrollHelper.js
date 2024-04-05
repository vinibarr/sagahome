

const containerScroll = {
    getVisibleElementId: function (container: HTMLElement, elementIdList: string[]) {
        const containerTop = container.scrollTop;

        return elementIdList.find(id => {
            const element = document.getElementById(id);

            return element && containerTop <= (element.offsetTop + (element.offsetHeight / 2));
        }) ?? "notfound";
    },

    scrollTo: function (container: HTMLElement, top: number) {
        container.scroll({
            top: top,
            behavior: 'smooth'
        });
    }
}


export {
    containerScroll
}