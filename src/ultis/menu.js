import icons from "./icons"

const { MdOutlineLibraryMusic } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá Nhân',
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: '',
        text: 'Khám Phá',
        end: true,
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <MdOutlineLibraryMusic size={24}/>
    },
    {
        path: 'follow',
        text: 'Theo Dõi',
        icons: <MdOutlineLibraryMusic size={24}/>
    }
]