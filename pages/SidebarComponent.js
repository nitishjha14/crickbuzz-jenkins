// class SidebarComponent {
//     constructor(page) {
//         this.page = page;
//         this.sidebarItems = page.locator('.oxd-main-menu > li');
//         // chevron 
//         this.chevronLeft = page.locator('.bi-chevron-left');
//         this.chevronRight = page.locator('.bi-chevron-right');
//     }

//     async toggleSidebar() {
//         if (await this.chevronLeft.isVisible()) {
//             await this.chevronLeft.click();
//         } else {
//             await this.chevronRight.click();
//         }
//     }
//     async isSidebarCollapsed() {
//         return await this.chevronRight.isVisible();
//     }
//     async isSidebarExpanded() {
//         return await this.chevronLeft.isVisible();
//     }
//     async getAllItems() {
//         return await this.sidebarItems.allTextContents();
//     }
// }
// export default SidebarComponent;

class SidebarComponent {
    constructor(page) {
        this.page = page;
        this.sidebarItems = page.locator('.oxd-main-menu > li');
        this.chevronLeft = page.locator('.bi-chevron-left');
        this.chevronRight = page.locator('.bi-chevron-left');
    }

    async toggleSidebar() {
        if(await this.chevronLeft.isVisible()) {
            await this.chevronLeft.click();
        } else {
            await this.chevronR
        }
    }

    async isSidebarCollapsed() {
        return await this.chevronRight.isVisible();
    }
    async isSidebarExposed() {
        return await this.chevronLeft.isVisible();
    }
    async getAllItemsSidebar() {
        return await this.sidebarItems.allTextContents();
    }
}
export default SidebarComponent;

