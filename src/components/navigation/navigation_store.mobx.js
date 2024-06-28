import { makeAutoObservable } from "mobx";
import { config } from "@/config";

class NavigationStore {
    isSidebarOpen = false;

    constructor() {
        this.isSidebarOpen = false;
        makeAutoObservable(this);
    }

    openSidebar = () => {
        console.log('openSidebar');
        this.isSidebarOpen = true;
    };

    closeSidebar = () => {
        this.isSidebarOpen = false;
    };

}

export default new NavigationStore();