Vue.createApp({
    data: function(){
        return {
            thumbnail: [
                {
                    num: 1,
                    title: "ギャラリー1",
                    link: "img/thumbnail001.jpg",
                },
                {
                    num: 2,
                    title: "ギャラリー2",
                    link: "img/thumbnail002.jpg",
                },
                {
                    num: 3,
                    title: "ギャラリー3",
                    link: "img/thumbnail003.jpg",
                },
                {
                    num: 4,
                    title: "ギャラリー4",
                    link: "img/thumbnail003.jpg",
                },
                {
                    num: 5,
                    title: "ギャラリー5",
                    link: "img/thumbnail003.jpg",
                },
                {
                    num: 6,
                    title: "ギャラリー6",
                    link: "img/thumbnail003.jpg",
                },
                {
                    num: 7,
                    title: "ギャラリー7",
                    link: "img/thumbnail003.jpg",
                },
                {
                    num: 8,
                    title: "ギャラリー8",
                    link: "img/thumbnail003.jpg",
                },
                {
                    num: 9,
                    title: "ギャラリー9",
                    link: "img/thumbnail003.jpg",
                },
            ],
            gallery: [
                {
                    num: 1,
                    title: "ギャラリー1",
                    link: "img/gallery001.jpg",
                },
                {
                    num: 2,
                    title: "ギャラリー2",
                    link: "img/gallery002.jpg",
                },
            ],
            ModalIsOpen: false,
            SelectedThumbnailNum: undefined,
        }
    },
    computed: {
        CurrentImage: function(){
            const self = this
            return _.find(self.gallery,function(img){
                return img.num === self.SelectedThumbnailNum
            })
        }
    },
    methods: {
        SwitchModal: function(img){
            this.ModalIsOpen = !this.ModalIsOpen
            this.SelectedThumbnailNum = img.num
        },
    },
}).mount("#app")