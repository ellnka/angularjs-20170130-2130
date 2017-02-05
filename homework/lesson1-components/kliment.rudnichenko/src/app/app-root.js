class UserRootController {

    $onInit() {
        this.usersList = JSON.parse('[{"firstName":"Катерина","surname":"Латухина","photo":"http://i.imgur.com/vN6pxep.jpg","country":"ru"},{"firstName":"Максим","surname":"Иванов","photo":"http://i.imgur.com/duePtdB.jpg","country":"ru"},{"firstName":"Егор","surname":"Литвяков","photo":"http://i.imgur.com/Re2rrye.jpg","country":"ru"},{"firstName":"Елена","surname":"Ярмушева","photo":"http://i.imgur.com/7ioi0My.jpg","country":"ua"},{"firstName":"Aibulat","surname":"Nigmatullin","country":"ru"},{"firstName":"Максим","surname":"Марина","photo":"http://i.imgur.com/JSEvJwf.jpg","country":"ru"},{"firstName":"Федор","surname":"Дыдыкин","photo":"http://i.imgur.com/VjqYamq.jpg","country":"ru"},{"firstName":"Андрей","surname":"Мягченков","country":"ru"},{"firstName":"Николай","surname":"Байбородин","photo":"http://i.imgur.com/vvzLtVG.jpg","country":"ru"},{"firstName":"Дмитрий","surname":"Марков","photo":"http://i.imgur.com/MOHWnlL.png","country":"ru"},{"firstName":"Юрий","surname":"Масьян","country":"ru"},{"firstName":"Тимур","surname":"Турчанинов","country":"ru"},{"firstName":"Треско","surname":"Константин","country":"ru"},{"firstName":"Вася","surname":"Пупкин","country":"ru"},{"firstName":"Андрей","surname":"Сызранов","photo":"http://i.imgur.com/IWSqtSO.jpg","country":"ru"},{"firstName":"Климент","surname":"Рудниченко","country":"ru"},{"firstName":"Larissa","surname":"Smirnova","country":"ca"},{"firstName":"Valery","surname":"Gavrilov","country":"ru"},{"firstName":"Людмила","surname":"Куприянова","country":"ru"},{"firstName":"Данила","surname":"Бурдин","country":"ru"},{"firstName":"Александр","surname":"Джанашвили","photo":"http://i.imgur.com/pGlRYJH.jpg","country":"ru"}]');
        this.selectedUser = null;
    }

    deleteUser(user) {
        this.usersList = this.usersList.filter(item => item !== user);
    }
}

const appRoot = {
    templateUrl: 'app/app-root.html',
    controller: UserRootController
};

export default appRoot;