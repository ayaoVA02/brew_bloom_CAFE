// ຂໍ້ມູນເມນູທັງໝົດພ້ອມລາຍລະອຽດ (Menu data with detailed information)
const menuData = {
    espresso: {
        title: 'Espresso',
        price: '35,000 kip',
        image: './images/espresso.webp',
        description: 'ກາເຟ espresso ທີ່ເຂັ້ມຂຸ້ນ ຖືກເຕັມຈາກເມັດກາເຟ Arabica ຄຸນນະພາບສູງທີ່ນຳເຂົ້າມາຈາກປະເທດເອທິໂອເປຍ ແລະ ໂຄລອມເບຍ. ການຂົ້ວແບບ medium-dark ເຮັດໃຫ້ມີລົດຊາດເຂັ້ມຂຸ້ນ ແລະ ກິ່ນຫອມທີ່ເປັນເອກະລັກ.',
        details: [
            { icon: '☕', text: 'ປະລິມານ: 30ml (Single Shot)' },
            { icon: '🌡️', text: 'ອຸນະພູມ: 90-96°C' },
            { icon: '⚡', text: 'ຄາເຟອີນ: ສູງ' },
            { icon: '⏱️', text: 'ເວລາເຕັມ: 25-30 ວິນາທີ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ຜູ້ທີ່ຊອບລົດຊາດກາເຟທີ່ເຂັ້ມຂຸ້ນແທ້ໆ' }
        ]
    },
    cappuccino: {
        title: 'Cappuccino',
        price: '45,000 kip',
        image: './images/Cappuccino.jpeg',
        description: 'Cappuccino ແບບດັ້ງເດີມອີຕາລີທີ່ປະສົມກັນລະຫວ່າງ espresso, ນົມອຸ່ນ ແລະ ຟອງນົມທີ່ເນັ້ນໜາ. ອັດຕາສ່ວນທີ່ສົມບູນແບບ 1:1:1 ເຮັດໃຫ້ໄດ້ລົດຊາດກາເຟທີ່ເຂັ້ມຂຸ້ນປະສົມກັບຄວາມນຸ້ມນວນຂອງນົມ.',
        details: [
            { icon: '☕', text: 'ປະລິມານ: 180ml' },
            { icon: '🥛', text: 'ສ່ວນປະກອບ: Espresso + ນົມອຸ່ນ + ຟອງນົມ' },
            { icon: '🌡️', text: 'ອຸນະພູມ: 65-70°C' },
            { icon: '⚡', text: 'ຄາເຟອີນ: ປານກາງ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ອາຫານເຊົ້າ ແລະ ຕອນບ່າຍ' }
        ]
    },
    latte: {
        title: 'Latte',
        price: '50,000 kip',
        image: './images/Latte.jpeg',
        description: 'Caffè Latte ທີ່ມີນົມຫຼາຍກວ່າ espresso ເຮັດໃຫ້ລົດຊາດເບົາກວ່າ cappuccino. ຖືກເຕັມດ້ວຍ espresso shot ແລະ ນົມອຸ່ນທີ່ມີຟອງນົມບາງໆເທິງສຸດ. ເໝາະສຳລັບຜູ້ທີ່ຊອບກາເຟທີ່ລົດຊາດອ່ອນນຸ້ມ.',
        details: [
            { icon: '☕', text: 'ປະລິມານ: 240ml' },
            { icon: '🥛', text: 'ສ່ວນປະກອບ: Espresso + ນົມອຸ່ນ 80%' },
            { icon: '🌡️', text: 'ອຸນະພູມ: 60-65°C' },
            { icon: '⚡', text: 'ຄາເຟອີນ: ປານກາງ' },
            { icon: '🎨', text: 'ມີ Latte Art ສວຍງາມ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ຜູ້ທີ່ຊອບລົດຊາດນົມຫຼາຍ' }
        ]
    },
    icedcoffee: {
        title: 'Iced Coffee',
        price: '40,000 kip',
        image: './images/ice_coffee.webp',
        description: 'ກາເຟເຢັນສົດໆທີ່ເຮັດຈາກເມັດກາເຟຄັດພິເສດ ເຕັມດ້ວຍວິທີ cold brew 12-24 ຊົ່ວໂມງ ເພື່ອໃຫ້ໄດ້ລົດຊາດກາເຟທີ່ນຸ້ມນວນ ບໍ່ຂົມຫຼາຍ ແລະ ມີຄວາມຫວານທຳມະຊາດ.',
        details: [
            { icon: '☕', text: 'ປະລິມານ: 350ml' },
            { icon: '🧊', text: 'ເສີບກັບນ້ຳກ້ອນ' },
            { icon: '❄️', text: 'ວິທີ: Cold Brew' },
            { icon: '⚡', text: 'ຄາເຟອີນ: ສູງ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ວັນທີ່ອາກາດຮ້ອນ' }
        ]
    },
    greentea: {
        title: 'Green Tea',
        price: '30,000 kip',
        image: './images/greenTea.jpeg',
        description: 'ຊາຂຽວອົງກິດຄຸນນະພາບສູງນຳເຂົ້າມາຈາກປະເທດຍີ່ປຸ່ນ. ອຸດົມໄປດ້ວຍສານຕ້ານອະນຸມູນອິດສະຫຼະ (Antioxidants) ມີປະໂຫຍດຕໍ່ສຸຂະພາບ ຊ່ວຍໃນການເຜົາຜານໄຂມັນ ແລະ ເພີ່ມການເຜົາຜານພະລັງງານ.',
        details: [
            { icon: '🍵', text: 'ປະລິມານ: 250ml' },
            { icon: '🌱', text: 'ປະເພດ: Japanese Sencha' },
            { icon: '🌡️', text: 'ອຸນະພູມ: 70-80°C' },
            { icon: '⚡', text: 'ຄາເຟອີນ: ຕ່ຳ' },
            { icon: '💚', text: 'ປະໂຫຍດ: ຕ້ານອະນຸມູນອິດສະຫຼະ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ຜູ້ທີ່ຮັກສາສຸຂະພາບ' }
        ]
    },
    blacktea: {
        title: 'Black Tea',
        price: '30,000 kip',
        image: './images/blacktea.jpeg',
        description: 'ຊາດຳທີ່ເຮັດຈາກໃບຊາຄັດພິເສດທີ່ຜ່ານການຫັກໃຊ້ຢ່າງດີ ມີລົດຊາດເຂັ້ມຂຸ້ນ ແລະ ກິ່ນຫອມທີ່ໜັກແໜ້ນ. ສາມາດເສີບແບບບໍ່ໃສ່ນ້ຳຕານຫຼືໃສ່ນົມກໍໄດ້.',
        details: [
            { icon: '🍵', text: 'ປະລິມານ: 250ml' },
            { icon: '🌿', text: 'ປະເພດ: Ceylon Black Tea' },
            { icon: '🌡️', text: 'ອຸນະພູມ: 95-100°C' },
            { icon: '⚡', text: 'ຄາເຟອີນ: ປານກາງ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ຕອນບ່າຍ' }
        ]
    },
    matchalatte: {
        title: 'Matcha Latte',
        price: '55,000 kip',
        image: './images/matchalatte.jpeg',
        description: 'ຊາ matcha ປະເພດ ceremonial grade ນຳເຂົ້າມາຈາກປະເທດຍີ່ປຸ່ນ ປະສົມກັບນົມອຸ່ນທີ່ມີຟອງນົມນຸ້ມນວນ. ມີລົດຊາດຂົມເລັກນ້ອຍ ແລະ ຫວານທຳມະຊາດ ອຸດົມໄປດ້ວຍວິຕາມິນ ແລະ ແຮ່ທາດ.',
        details: [
            { icon: '🍵', text: 'ປະລິມານ: 240ml' },
            { icon: '🍃', text: 'ປະເພດ: Ceremonial Grade Matcha' },
            { icon: '🥛', text: 'ສ່ວນປະກອບ: Matcha + ນົມອຸ່ນ' },
            { icon: '⚡', text: 'ຄາເຟອີນ: ປານກາງ' },
            { icon: '💪', text: 'ປະໂຫຍດ: ເພີ່ມພະລັງງານອາຍຸຍືນ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ຜູ້ທີ່ຊອບຊາຍີ່ປຸ່ນ' }
        ]
    },
    icedchocolate: {
        title: 'Iced Chocolate',
        price: '45,000 kip',
        image: './images/iceChocolate.jpg',
        description: 'ເຄື່ອງດື່ມ chocolate ເຢັນທີ່ເຮັດຈາກ Belgian chocolate ຄຸນນະພາບສູງ ປະສົມກັບນົມສົດ ແລະ ນ້ຳກ້ອນ. ມີລົດຊາດຫວານມັນ ແລະ ເຂັ້ມຂຸ້ນຂອງ chocolate ແທ້ໆ.',
        details: [
            { icon: '🍫', text: 'ປະລິມານ: 350ml' },
            { icon: '🇧🇪', text: 'ປະເພດ: Belgian Dark Chocolate' },
            { icon: '🥛', text: 'ສ່ວນປະກອບ: Chocolate + ນົມສົດ' },
            { icon: '🧊', text: 'ເສີບກັບນ້ຳກ້ອນ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ເດັກ ແລະ ຜູ້ໃຫຍ່' }
        ]
    },
    orangejuice: {
        title: 'Fresh Orange Juice',
        price: '40,000 kip',
        image: './images/orangeJuice.jpeg',
        description: 'ນ້ຳສົ້ມສົດຄັດຈາກສົ້ມເປັນແກ່ມທີ່ສົດໃໝ່ທຸກມື້ ບໍ່ໃສ່ນ້ຳຕານ ບໍ່ມີສານກັນບູດ. ອຸດົມໄປດ້ວຍວິຕາມິນ C ທີ່ມີປະໂຫຍດຕໍ່ລະບົບພູມຕ້ານທານ.',
        details: [
            { icon: '🍊', text: 'ປະລິມານ: 300ml' },
            { icon: '🌿', text: '100% ສົດທຳມະຊາດ' },
            { icon: '❌', text: 'ບໍ່ມີນ້ຳຕານເພີ່ມ' },
            { icon: '💊', text: 'ວິຕາມິນ C ສູງ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ອາຫານເຊົ້າ' }
        ]
    },
    chocolatecake: {
        title: 'Chocolate Cake',
        price: '60,000 kip',
        image: './images/cakesnack.jpeg',
        description: 'ເຂົ້າໜົມ chocolate ຊັ້ນຫນາທີ່ເຮັດຈາກ dark chocolate ຄຸນນະພາບສູງ ເສີບດ້ວຍນ້ຳຕານ chocolate ganache ທີ່ເນັ້ນໜາ ແລະ ຄຣີມສົດທີ່ນຸ້ມນວນ. ເໝາະສຳລັບຜູ້ທີ່ຊອບລົດຊາດ chocolate ທີ່ເຂັ້ມຂຸ້ນ.',
        details: [
            { icon: '🍰', text: 'ນໍ້າໜັກ: 120g ຕໍ່ຊິ້ນ' },
            { icon: '🍫', text: 'ສ່ວນປະກອບ: Dark Chocolate 70%' },
            { icon: '🥚', text: 'ເຮັດສົດໃໝ່ທຸກມື້' },
            { icon: '❄️', text: 'ເກັບໃນຕູ້ເຢັນ' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ຂອງຫວານຫຼັງອາຫານ' }
        ]
    },
    cheesecake: {
        title: 'Cheesecake',
        price: '65,000 kip',
        image: './images/chocolateCake.jpg',
        description: 'ຊີສເຄັກແບບ New York ທີ່ເຮັດຈາກ cream cheese ຄຸນນະພາບສູງ ຖານເປັນ graham cracker ທີ່ກະທັດ ເສີບດ້ວຍນ້ຳຕານແດງທີ່ເປັນສູດພິເສດ. ມີລົດຊາດເນັ້ນນຸ້ມນວນ ແລະ ຄວາມຫວານທີ່ພໍດີ.',
        details: [
            { icon: '🍰', text: 'ນໍ້າໜັກ: 150g ຕໍ່ຊິ້ນ' },
            { icon: '🧀', text: 'ສ່ວນປະກອບ: Cream Cheese ແທ້' },
            { icon: '🍓', text: 'ເສີບດ້ວຍນ້ຳຕານແດງ' },
            { icon: '🥚', text: 'ເຮັດສົດໃໝ່ທຸກມື້' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ມື້ພິເສດ' }
        ]
    },
    eggbhurgi: {
        title: 'Egg Bhurgi',
        price: '65,000 kip',
        image: './images/eggBhurji.jpeg',
        description: 'ເຂົ້າຈີ່ຂະໜຽວອົບກັບ avocado ສົດທີ່ທຳມາຢ່າງລະອຽດ ແລະ ໄຂ່ scrambled ທີ່ເຮັດດ້ວຍເນີຍແທ້. ອຸດົມໄປດ້ວຍໂປຣຕີນ ແລະ ໄຂມັນດີ ເໝາະສຳລັບອາຫານເຊົ້າທີ່ມີທາດອາຫານຄົບຖ້ວນ.',
        details: [
            { icon: '🍞', text: 'ເຂົ້າຈີ່ sourdough ແທ້' },
            { icon: '🥑', text: 'Avocado ສົດ' },
            { icon: '🥚', text: 'ໄຂ່ໄກ່ສົດ 2 ໝອນ' },
            { icon: '🧈', text: 'ເຮັດດ້ວຍເນີຍແທ້' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ອາຫານເຊົ້າທີ່ມີໂປຣຕີນສູງ' }
        ]
    },
    hashbrown: {
        title: 'Hash Brown',
        price: '75,000 kip',
        image: './images/HashBrown.jpg',
        description: 'ຫົວແກ້ວທອດກອກກອກທີ່ຫັບມ້ວນ ເສີບພ້ອມໄຂ່ດາວ, ເບຄອນ ແລະ ນ້ຳຕານ maple ແທ້ຈາກແຄນນາດາ. ມີເຜັດຜັກສົດເພີ່ມຄວາມສົດຊື່ນ. ເປັນອາຫານເຊົ້າແບບ American ທີ່ອະລ່ອຍ.',
        details: [
            { icon: '🥔', text: 'ຫົວແກ້ວທອດກອກ' },
            { icon: '🥚', text: 'ໄຂ່ດາວ 2 ໝອນ' },
            { icon: '🥓', text: 'ເບຄອນອົບກອກ' },
            { icon: '🍁', text: 'ນ້ຳຕານ Maple ແທ້' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ອາຫານເຊົ້າແບບອິ່ມທ້ອງ' }
        ]
    },
    salad: {
        title: 'Fresh Salad',
        price: '80,000 kip',
        image: './images/fruits.jpeg',
        description: 'ສະຫຼັດສົດຈາກຜັກທີ່ຄັດເລືອກຢ່າງດີ ປະກອບດ້ວຍຜັກໃບເຂັ້ມ, cherry tomatoes, avocado, ແລະ ໝາກຖົ່ວຫຼາຍຊະນິດ. ເສີບພ້ອມ honey mustard dressing ທີ່ເຮັດເອງ. ອຸດົມໄປດ້ວຍໄຟເບີ ແລະ ວິຕາມິນ.',
        details: [
            { icon: '🥗', text: 'ປະລິມານ: 250g' },
            { icon: '🥬', text: 'ຜັກໃບເຂັ້ມຫຼາຍຊະນິດ' },
            { icon: '🥑', text: 'Avocado ແລະ ໝາກຖົ່ວ' },
            { icon: '🍯', text: 'Honey Mustard Dressing' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ຜູ້ທີ່ຮັກສາສຸຂະພາບ' }
        ]
    },
    croissant: {
        title: 'Croissant',
        price: '45,000 kip',
        image: './images/Croissant.jpeg',
        description: 'Croissant ແບບຝຣັ່ງແທ້ທີ່ເຮັດດ້ວຍເນີຍແທ້ 100% ຜ່ານການອົບຢ່າງພິຖີພິຖັນ ມີຊັ້ນບາງໆທີ່ພຽງພໍ ນອກກອກໃນນຸ້ມ. ກິ່ນຫອມຂອງເນີຍອົບໃໝ່ໆທີ່ຊວນໃຫ້ຫວງກິນ.',
        details: [
            { icon: '🥐', text: 'ນໍ້າໜັກ: 80g ຕໍ່ຊິ້ນ' },
            { icon: '🧈', text: 'ເນີຍແທ້ 100%' },
            { icon: '🔥', text: 'ອົບສົດໃໝ່ທຸກມື້' },
            { icon: '⏰', text: 'ເວລາທຳ: 3 ມື້' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ອາຫານເຊົ້າ, ອາຫານວ່າງ' }
        ]
    },
    cookie: {
        title: 'Chocolate Chip Cookie',
        price: '35,000 kip',
        image: './images/Chocolate_Chip_Cookies_sob.jpg',
        description: 'ຄຸກກີ້ chocolate chip ທີ່ອົບສົດໃໝ່ທຸກມື້ ເຮັດຈາກ Belgian chocolate chips ຄຸນນະພາບສູງ. ນອກກອກໃນນຸ້ມ ມີລົດຊາດຫວານມັນຂອງເນີຍ ແລະ chocolate ທີ່ລົງຕົວ.',
        details: [
            { icon: '🍪', text: 'ນໍ້າໜັກ: 60g ຕໍ່ຊິ້ນ' },
            { icon: '🍫', text: 'Belgian Chocolate Chips' },
            { icon: '🔥', text: 'ອົບສົດໃໝ່ທຸກມື້' },
            { icon: '🧈', text: 'ເຮັດດ້ວຍເນີຍແທ້' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ຄູ່ກັບກາເຟ' }
        ]
    },
    muffin: {
        title: 'Blueberry Muffin',
        price: '40,000 kip',
        image: './images/blueberry-muffin.jpg',
        description: 'ມັຟຟິນ blueberry ທີ່ເຮັດສົດໆທຸກມື້ ເຕັມໄປດ້ວຍ blueberry ສົດໆ ແລະ ໝາກຖົ່ວທີ່ກອກກອກເທິງສຸດ. ມີລົດຊາດຫວານພໍດີ ບໍ່ຫວານຫຼາຍເກີນໄປ. ອຸດົມໄປດ້ວຍ Antioxidants.',
        details: [
            { icon: '🧁', text: 'ນໍ້າໜັກ: 100g ຕໍ່ຊິ້ນ' },
            { icon: '🫐', text: 'Blueberry ສົດ' },
            { icon: '🥜', text: 'ເທິງມີໝາກຖົ່ວກອກ' },
            { icon: '🔥', text: 'ອົບສົດໃໝ່ທຸກມື້' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ອາຫານເຊົ້າ, ອາຫານວ່າງ' }
        ]
    },
    cinnamonroll: {
        title: 'Cinnamon Roll',
        price: '55,000 kip',
        image: './images/cinnamon_buns_10634_16x9.jpg',
        description: 'Cinnamon roll ແບບ Swedish ທີ່ມີລົດຊາດຫອມຂອງອົບເຊີຍ cinnamon ແລະ cardamom. ເສີບດ້ວຍ cream cheese frosting ທີ່ນຸ້ມນວນ. ເຮັດຈາກແປ້ງທີ່ຫັກໃຊ້ຫຼາຍຊົ່ວໂມງ ເຮັດໃຫ້ນຸ້ມນວນພິເສດ.',
        details: [
            { icon: '🥯', text: 'ນໍ້າໜັກ: 120g ຕໍ່ຊິ້ນ' },
            { icon: '🌿', text: 'ອົບເຊີຍ Cinnamon ແລະ Cardamom' },
            { icon: '🧀', text: 'Cream Cheese Frosting' },
            { icon: '🔥', text: 'ອົບສົດໃໝ່ທຸກມື້' },
            { icon: '🎯', text: 'ເໝາະສຳລັບ: ອາຫານເຊົ້າແບບພິເສດ' }
        ]
    }
};

// Open modal function ການເປີດຫນ້າ POPUP
function openModal(itemId) {
    const item = menuData[itemId];
    if (!item) return;

    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalPrice').textContent = item.price;
    document.getElementById('modalDescription').textContent = item.description;

    // Create details HTML
    const detailsHTML = item.details.map(detail =>
        `<div class="detail-item">
                    <span class="detail-icon">${detail.icon}</span>
                    <span>${detail.text}</span>
                </div>`
    ).join('');

    document.getElementById('modalDetails').innerHTML = detailsHTML;

    // Show modal ສະແດງ modal
    document.getElementById('menuModal').classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal function ຝັງຊົນການປິດຫນ້າ popup
function closeModal() {
    document.getElementById('menuModal').classList.remove('show');
    document.body.style.overflow = 'auto'; // Enable scrolling
}

// Close modal when clicking outside ຝັງຊົນການປິດຫນ້າ popup ທັງນອກ
function closeModalOnOutside(event) {
    if (event.target.id === 'menuModal') {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Contact form submission ສະແດງເມື່ອມີການຕິດຕໍ່ຫາເຮົາ
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('ຂອບໃຈທີ່ຕິດຕໍ່ພວກເຮົາ! ພວກເຮົາຈະຕອບກັບໃນໄວໆນີ້.');
    this.reset();
});

// Smooth scrolling for navigation links ການເລື່ອນຫນ້າແບບ smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});