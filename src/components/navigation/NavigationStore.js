import { makeAutoObservable } from "mobx";

class NavigationStore {
    isSidebarOpen = false;
    currentSeries = null;

    constructor() {
        this.isSidebarOpen = false;
        this.currentSeries = null;
        makeAutoObservable(this,{
            // isSidebarOpen: false,
            currentSeries: false
        });
        
    }

    openSidebar = () => {
        console.log('openSidebar');
        this.isSidebarOpen = true;
    };

    closeSidebar = () => {
        this.isSidebarOpen = false;
    };

    setCurrentSeries = (seriesSlug) => {
        this.currentSeries = seriesSlug;
    }
}

export default new NavigationStore();