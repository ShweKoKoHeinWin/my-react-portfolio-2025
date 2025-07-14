import { LANGs } from "../constants";
import type { ProjectCategoryProp, ProjectProp } from "../types";

export const Categories: ProjectCategoryProp = {
    keys: ["own", "company", "tutorial"],
    [LANGs.ENGLISH]: {
        own: "Own",
        company: "Company",
        tutorial: "Tutorial",
    },
    [LANGs.MYANMAR]: {
        own: "ကိုယ်ပိုင်",
        company: "ကုမ္ပဏီ",
        tutorial: "သင်ခန်းစာ",
    },
};

export const DiaryApp: ProjectProp = {
    name: "SKK Diary App",
    [LANGs.ENGLISH]: {
        description:
            "Keep track of your daily activites with this diary app. Organize entries, create collections, and share with friends—securely and easily.",
        features: {
            "📝 Diary Management": [
                "Create, edit, view, and delete personal diary entries",
                "Title, rich content, emotion status, categorization, file attachments with captions",
                "Flexible search, filtering (emotion, category, date between), sorting(by title, category, datetime)",
                "Add/remove entries to collections",
                "Share entries with other users",
            ],
            "📚 Collection Management": [
                "Create, edit, view, and delete collections",
                "Title, Description, Diary Entries tagging",
                "Flexiable search, filtering (date between), sorting(by title, datetime)",
                "Share entries with other users",
            ],
            "🔗 Sharing Management": [
                "Inbox - View all diaries and collections that have been shared with you by other users.",
                "Outbox - Track diaries/collections you shared",
                "Users - See a list of users you've interacted, View user profile and see what you shared/received",
            ],
            "📊 Dashboard": [
                "Overview of total diaries, collections, categories, and emotional stats",
                "Visual insights into diary activity and trends",
            ],
            "📅 Calendar View": [
                "View diaries, shared, and received item counts by selected date",
            ],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "ဤဒိုင်ယာရီအက်ပ်နှင့်အတူ သင်၏နေစဥ်လှုပ်ရှားမှုများကို မှတ်တမ်းတင်ပါ။ မှတ်တမ်းစုစည်းများဖန်တီးပြီး မိတ်ဆွေဆီ ဘေးကင်းလုံခြုံစွာနှင့်လွယ်ကူစွာ မျှဝေလိုက်ပါ။",
        features: {
            "📝 ဒိုင်ယာရီ စီမံခန့်ခွဲမှု": [
                "ဒိုင်ယာရီများကို ဖန်တီးခြင်း၊ ပြင်ဆင်ခြင်း၊ ကြည့်ရှုခြင်းနှင့် ဖျက်ခြင်း",
                "ခေါင်းစဉ်၊ အကြောင်းအရာ၊ စိတ်ခံစားမှုအခြေအနေ၊ အမျိုးအစားခွဲခြားမှု၊ မှတ်ချက်ပါသောဖိုင်တွဲဖက်မှု",
                "စိတ်ခံစားမှု၊ အမျိုးအစား၊ ရက်စွဲအကြားဖြင့် ရှာဖွေခြင်း၊ စီစစ်ခြင်း၊ ခေါင်းစဉ်၊ အမျိုးအစား၊ ရက်စွဲအချိန်ဖြင့် စဉ်ခြင်း",
                "ဒိုင်ယာရီများကို စုစည်းမှုများထဲသို့ ထည့်ခြင်း/ဖယ်ရှားခြင်း",
                "ဒိုင်ယာရီများကို အသုံးပြုသူများနှင့် မျှဝေခြင်း",
            ],
            "📚 စုစည်းမှု စီမံခန့်ခွဲမှု": [
                "ဒိုင်ယာရီ စုစည်းမှုများကို ဖန်တီးခြင်း၊ ပြင်ဆင်ခြင်း၊ ကြည့်ရှုခြင်းနှင့် ဖျက်ခြင်း",
                "ခေါင်းစဉ်၊ ဖော်ပြချက်၊ ဒိုင်ယာရီများ တပ်ဆင်ခြင်း",
                "ရက်စွဲအပိုင်းခြားဖြင့် ရှာဖွေခြင်း၊ စီစစ်ခြင်း၊ ခေါင်းစဉ်၊ ရက်စွဲအချိန်ဖြင့် စဉ်ခြင်း",
                "စုစည်းမှုများကို အသုံးပြုသူများနှင့် မျှဝေခြင်း",
            ],
            "🔗 မျှဝေမှု စီမံခန့်ခွဲမှု": [
                "📥 အဝင်များ - အခြားအသုံးပြုသူများက မျှဝေထားသော ဒိုင်ယာရီနှင့် စုစည်းမှုများကို ကြည့်ရှုနိုင်သည်",
                "📤 အထွက်များ - မိမိက မျှဝေထားသော ဒိုင်ယာရီနှင့် စုစည်းမှုများကို ခြေရာခံနိုင်သည်",
                "👥 အသုံးပြုသူများ - မျှဝေမှု/လက်ခံမှုဖြင့် ဆက်သွယ်ထားသော အသုံးပြုသူများစာရင်း၊ အသုံးပြုသူအချက်အလက်နှင့် မျှဝေ/လက်ခံထားသော ဒိုင်ယာရီနှင့် စုစည်းမှုများကို ကြည့်ရှုနိုင်သည်",
            ],
            "📊 ဒက်ရှ်ဘုတ် (Dashboard)": [
                "စုစုပေါင်း ဒိုင်ယာရီ၊ စုစည်းမှု၊ အမျိုးအစား စသည့်အချက်အလက်များကို တစ်နေရာတည်းတွင် ကြည့်ရှုနိုင်သည်",
                "ဒိုင်ယာရီများ၏ စိတ်ခံစားမှုအခြေအနေများ၊ အမျိုးအစားများအပေါ် အခြေခံပြီး အချက်အလက်များကို သုံးသပ်နိုင်သည်",
            ],
            "📅 ပြက္ခဒိန်စာမျက်နှာ": [
                "ရွေးချယ်ထားသောရက်စွဲအပေါ် မူတည်၍ ဖန်တီးထားသော ဒိုင်ယာရီများ၊ မျှဝေထားသော/လက်ခံထားသော အရေအတွက်များကို ပြသသည်",
            ],
        },
        myContributions: "",
    },
    techStack: ["react", "inertia", "tailwind", "shadcn", "laravel", "sqlite"],
    category: "own",
    photos: [
        "Dashboard.png",
        "Calendar.png",
        "DiaryEdit.png",
        "DiaryList.png",
        "DiaryCollection.png",
        "DiaryShare.png",
        "CollectionList.png",
        "CategoryList.png",
        "EmotionList.png",
        "Shared.png",
        "UserDetail.png",
        "UserList.png",
    ],
};

export const RiceMillApp: ProjectProp = {
    name: "TDP RiceMill App",

    [LANGs.ENGLISH]: {
        description:
            "A comprehensive rice mill management system that streamlines product tracking, production workflows, warehouse operations, sales transactions, and financial records — all in one place.",
        features: {
            "🧩 Product Management": [
                "Add/edit products with fields such as name, category, cost, price, quantity, warning quantity, tax, unit, and image",
                "Maintain price history and update daily prices",
                "Manually adjust product quantities",
            ],
            "🔄 Sales, Returns, and Purchase Management": [
                "Record all sales, purchases, and return transactions",
                "Automatically calculate product stock levels",
                "Track partial shipments and arrivals",
                "Flexible pricing, cost adjustments, and discount handling",
            ],
            "🏭 Rice Milling Management": {
                "Client Milling": [
                    "Start: Select client, record raw materials (name, quantity, unit)",
                    "Finish: Record service fees, payments, main and side product outcomes, and assign warehouse storage",
                ],
                "Own Milling": [
                    "Start: Select raw products and record quantity and cost at the time",
                    "Finish: Record service fees and outcome products (quantities only)",
                    "Calculate Cost: Use formulas to compute new cost based on raw material pricing (current, initial, or custom)",
                ],
            },
            "🏬 Warehouse Management": [
                "Create warehouse records with client, duration, warehouse number/name, product list, quantity, unit, and fees",
                "Support multiple product withdrawals and additions by client",
                "Manage presale and refill presale products from by rice mill",
            ],
            "📅 Payment & Loan Management": [
                "Record various transaction types (cash, credit, bank transfer, product-based)",
                "Track client debts and loans related to rice milling services",
            ],
            "👥 Client Data Management": [
                "Store client information (name, address, email, phone numbers)",
                "View related activities: sales, purchases, milling, warehouse rentals, and loans",
            ],
            "📊 Reports": [
                "Profit Reports: View totals for sales, purchases, milling, warehouse, expenses, and received payments within a selected date range",
                "Payment Reports: Consolidated view of all payments across modules",
            ],
            "📄 Account Statement": [
                "Generate financial statements summarizing daily transactions",
            ],
            "👨‍💼 Staff & Permissions": [
                "Manage staff roles and assign permissions based on responsibilities",
            ],
            "🏢 Multi-Miller Support": [
                "Support for multiple independent millers with full feature access",
            ],
            "🌐 Language Support": [
                "Available in English and Burmese for user convenience",
            ],
        },
        myContributions:
            "As a freelancer, I inherited a mini-market management app and transformed it into a full-featured, multi-miller rice milling platform. I fixed existing bugs and added key modules including milling tracking, warehouse control, loan management, account statements, and real-time product net weight calculations. Over 7 months, I worked closely with the client to fulfill their evolving needs, implementing numerous small but essential features along the way.",
    },
    [LANGs.MYANMAR]: {
        description:
            "ထုတ်ကုန်စီမံခန့်ခွဲမှု၊ ထုတ်လုပ်မှုလုပ်ငန်းစဉ်များ၊ ဂိုဒေါင်စီမံခန့်ခွဲမှု၊ ရောင်းဝယ်မှုလုပ်ငန်းများနှင့် ငွေကြေးမှတ်တမ်းများကို တစ်နေရာတည်းတွင် စနစ်တကျ စီမံနိုင်သော စပါးစက်လုပ်ငန်းအတွက် စုံလင်သောစီမံခန့်ခွဲမှုစနစ်ဖြစ်သည်။",
        features: {
            "🧩 ထုတ်ကုန် စီမံခန့်ခွဲမှု": [
                "ထုတ်ကုန်အသစ်ထည့်ခြင်း/ပြင်ဆင်ခြင်း (အမည်၊ အမျိုးအစား၊ စျေးနှုန်း၊ ပမာဏ၊ အခွန်၊ တစ်ခုချင်းယူနစ်၊ ဓာတ်ပုံ)",
                "စျေးနှုန်းမှတ်တမ်းများ ထိန်းသိမ်းခြင်းနှင့် နေ့စဉ်စျေးနှုန်းများ ပြင်ဆင်နိုင်ခြင်း",
                "လက်ကျန်ပမာဏကို ကိုယ်တိုင် ပြင်ဆင်နိုင်ခြင်း",
            ],
            "🔄 ရောင်းဝယ်မှုနှင့် ပြန်အမ်း စီမံခန့်ခွဲမှု": [
                "ရောင်းဝယ်မှု၊ ဝယ်ယူမှုနှင့် ပြန်အမ်းမှတ်တမ်းများ မှတ်တမ်းတင်ခြင်း",
                "လက်ကျန်ပစ္စည်းအရေအတွက်ကို အလိုအလျောက်တွက်ချက်ပေးခြင်း",
                "ပစ္စည်းအပိုင်းပိုင်း ပို့ခြင်း/လက်ခံခြင်းများ မှတ်တမ်းတင်နိုင်ခြင်း",
                "စျေးနှုန်း၊ တန်ဖိုး၊ လျှော့စျေးများကို လိုအပ်သလို ပြင်ဆင်တွက်ချက်နိုင်ခြင်း",
            ],
            "🏭 စပါးကြိတ်ခွဲ စီမံခန့်ခွဲမှု": {
                ဖောက်သည်ကြိတ်ခွဲ: [
                    "စတင်ခြင်း - ဖောက်သည်ရွေးချယ်ခြင်း၊ အမည်၊ ပမာဏ၊ ယူနစ်အပါအဝင် အမဲစပါးမှတ်တမ်းတင်ခြင်း",
                    "ပြီးဆုံးခြင်း - ဝန်ဆောင်ခ၊ ငွေပေးချေမှု၊ အဓိကထွက်ကုန်နှင့် ဘေးထွက်ကုန်များ၊ ဂိုဒေါင်သို့သိမ်းဆည်းခြင်း",
                ],
                ကိုယ်ပိုင်ကြိတ်ခွဲ: [
                    "စတင်ခြင်း - အမဲစပါးရွေးချယ်ခြင်း၊ ပမာဏနှင့် စျေးနှုန်း မှတ်တမ်းတင်ခြင်း",
                    "ပြီးဆုံးခြင်း - ဝန်ဆောင်ခနှင့် ထွက်ကုန်များ (ပမာဏသာ) မှတ်တမ်းတင်ခြင်း",
                    "ကုန်ကျစရိတ်တွက်ချက်ခြင်း - စနစ်တကျ ဖော်မြူလာဖြင့် ထပ်မံတွက်ချက်နိုင်ခြင်း (လက်ရှိ၊ စတင်ချိန်၊ သတ်မှတ်စျေးနှုန်း)",
                ],
            },
            "🏬 ဂိုဒေါင် စီမံခန့်ခွဲမှု": [
                "ဖောက်သည်၊ သတ်မှတ်ကာလ၊ ဂိုဒေါင်နံပါတ်/အမည်၊ ထုတ်ကုန်စာရင်း၊ ပမာဏ၊ ယူနစ်၊ ငွေကြေးအချက်အလက်များဖြင့် ဂိုဒေါင်မှတ်တမ်းဖန်တီးခြင်း",
                "ဖောက်သည်အလိုက် ထုတ်ကုန်ထည့်ခြင်း/ထုတ်ယူခြင်းများကို ထပ်ခါတလဲလဲ ပြုလုပ်နိုင်ခြင်း",
                "စပါးစက်မှ Presale နှင့် Refill Presale ထုတ်ကုန်များ စီမံနိုင်ခြင်း",
            ],
            "📅 ငွေပေးချေမှုနှင့် ချေးငွေ စီမံခန့်ခွဲမှု": [
                "ငွေပေးချေမှုအမျိုးမျိုး (ငွေသား၊ ခရက်ဒစ်၊ ဘဏ်လွှဲ၊ ထုတ်ကုန်ဖြင့်) မှတ်တမ်းတင်ခြင်း",
                "ဖောက်သည်အလိုက် ချေးငွေ/အကြွေးများကို စနစ်တကျ စီမံနိုင်ခြင်း",
            ],
            "👥 ဖောက်သည်အချက်အလက် စီမံခန့်ခွဲမှု": [
                "ဖောက်သည်အချက်အလက်များ (အမည်၊ လိပ်စာ၊ အီးမေးလ်၊ ဖုန်းနံပါတ်များ)",
                "ဆက်စပ်လုပ်ဆောင်မှုများ (ရောင်းဝယ်မှု၊ ဝယ်ယူမှု၊ စက်မှုလုပ်ငန်း၊ ဂိုဒေါင်ငှားမှု၊ ချေးငွေ)",
            ],
            "📊 အစီရင်ခံစာများ": [
                "အမြတ်အစွန်းအစီရင်ခံစာ - ရောင်းဝယ်မှု၊ ဝယ်ယူမှု၊ စက်မှုလုပ်ငန်း၊ ဂိုဒေါင်၊ အသုံးစရိတ်၊ ငွေလက်ခံမှုများကို ရက်စွဲအလိုက် ကြည့်ရှုနိုင်ခြင်း",
                "ငွေပေးချေမှုအစီရင်ခံစာ - များစွာသောလုပ်ဆောင်မှုများအတွက် ငွေပေးချေမှုများကို တစ်နေရာတည်းတွင် ကြည့်ရှုနိုင်ခြင်း",
            ],
            "📄 အကောင့်စာရင်း": [
                "နေ့စဉ်လုပ်ဆောင်မှုများအတွက် ငွေကြေးစာရင်းများ ပြုလုပ်နိုင်ခြင်း",
            ],
            "👨‍💼 ဝန်ထမ်းနှင့် ခွင့်ပြုချက် စီမံခန့်ခွဲမှု": [
                "ဝန်ထမ်းအလိုက် တာဝန်ခန့်ထားခြင်းနှင့် ခွင့်ပြုချက်များ သတ်မှတ်နိုင်ခြင်း",
            ],
            "🏢 စပါးစက်အများအပြား စနစ်": [
                "စနစ်တစ်ခုတည်းဖြင့် စီမံနိုင်သော စက်များအများအပြားကို ထောက်ပံ့နိုင်ခြင်း",
            ],
            "🌐 ဘာသာစကား ထောက်ပံ့မှု": [
                "အသုံးပြုသူအဆင်ပြေစေရန် English နှင့် မြန်မာဘာသာများ ထောက်ပံ့ထားသည်",
            ],
        },
        myContributions:
            "အလွတ်တန်းကုတ်ရေးသူအဖြစ် စျေးဝယ်စနစ်အသေးစားတစ်ခုကို လက်ခံရရှိပြီးနောက်၊ စနစ်တစ်ခုလုံးကို စပါးစက်လုပ်ငန်းအတွက် အပြည့်အဝ အသုံးပြုနိုင်သော စနစ်အဖြစ် ပြောင်းလဲဖန်တီးခဲ့ပါသည်။ ရှိပြီးသားအမှားများကို ပြင်ဆင်ပြီး Milling Tracking, Warehouse Control, Loan Management, Account Statements, နှင့် ထုတ်ကုန်အလေးချိန်တွက်ချက်မှုများအပါအဝင် အရေးကြီးသော module များကို ထည့်သွင်းခဲ့ပါသည်။ ၇ လကြာအတွင်း Client ၏လိုအပ်ချက်များကို ဖြည့်ဆည်းနိုင်ရန် သေးငယ်သော feature များအပါအဝင် များစွာသောလုပ်ဆောင်မှုများကို တစ်ဦးတည်းဖြင့် တာဝန်ယူပြီး တည်ဆောက်ခဲ့ပါသည်။",
    },
    techStack: ["livewire", "laravel", "mysql", "bootstrap", "jquery"],
    category: "company",
    photos: [
        "ProductCreate.png",
        "ProductAdjustment.png",
        "ProductList.png",
        "UnitLIst.png",
        "CurrencyList.png",
        "AccountCashInOut.png",
        "AccountStatementList.png",
        "ClientDetail1.png",
        "ClientLoan.png",
        "ClientList.png",
        "SaleCreate.png",
        "PurchaseList.png",
        "PurchasePayment.png",
        "PurchaseCreate1.png",
        "PurchaseCreate2.png",
        "PurchaseDetail2.png",
        "PurchaseDelivery.png",
        "MillingList.png",
        "MillingCreate.png",
        "MillingOutcome1.png",
        "MillingOutcome2.png",
        "MillingDetail1.png",
        "MillingDetail2.png",
        "WarehouseCreate.png",
        "WarehouseInventory.png",
        "WarehouseList.png",
        "StaffCreate.png",
        "StaffLIst.png",
        "Counting.png",
        "CountingCreate.png",
        "StoreCreate.png",
        "ProfitReport.png",
        "PaymentReport.png",
        "Dashboard.png",
        "ExpenseList.png",
        "Permission1.png",
        "Permission2.png",
        "Setting.png",
    ],
};

export const RealEstateApp: ProjectProp = {
    name: "TDP Real Estate",
    [LANGs.ENGLISH]: {
        description:
            "A full-featured real estate management platform for handling property sales, rentals, client offers, third-party shops, and admin approvals — all in one client/admin system.",
        features: {
            "🏠 Property Listings (Sale / Rent / New Points)": [
                "Add/edit properties with details: title, home type (apartment/villa), ownership type, price, area (sq ft), land area, floors, bedrooms, bathrooms.",
                "Location data: city, township, address, geographic coordinates (Google Maps integration).",
                "Nearby amenities: schools, hospitals, markets (tagged for searchability).",
                "Facilities, available appointment time, and remarks.",
                "Status tracking: Available, Sale/Rent Closed, Rejected (with reason).",
            ],
            "💰 Offers & Deals": [
                "Buy/Rent Offers: Clients submit requirements (city, budget, home type).",
                "Auto-suggest: System matches client needs with available properties and suggests them to admin for client follow-up.",
            ],
            "🛒 Third-Party Seller Integration": {
                "Real Estates": [
                    "Clients can submit sale/rent/new property listings.",
                    "Admins can approve or reject submitted properties.",
                ],
                Shops: ["Clients can open shops and display their products."],
                Common: [
                    "Clients must purchase a package to list items.",
                    "Visitors can leave remarks and ratings.",
                ],
            },
            "📰 Knowledge Base": [
                "CRUD for news/articles about real estate trends.",
                "Manage reference data: cities, townships, home types, ownership types, schools, hospitals, markets.",
            ],
            "🛠️ Admin Tools": [
                "Staff & permissions: Role-based access for admins, agents, and vendors.",
                "Package management: Subscription plans for third-party sellers.",
                "Site settings: Logos, banners, about page content.",
            ],
        },
        myContributions:
            "Junior developer maintaining a real estate platform—fixed bugs, added features, and rebuilt the client UI for a new company.",
    },
    [LANGs.MYANMAR]: {
        description:
            "အိမ်ခြံမြေ ရောင်း/ငှားမှုများ၊ ဖောက်သည်တောင်းဆိုမှုများ၊ Third-party ဆိုင်များနှင့် အက်မင်အတည်ပြုမှုများကို တစ်နေရာတည်းတွင် စနစ်တကျ စီမံနိုင်သော စုံလင်သော အိမ်ခြံမြေစီမံခန့်ခွဲမှုစနစ်ဖြစ်သည်။",
        features: {
            "🏠 အိမ်ခြံမြေစာရင်း (ရောင်း/ငှား/အသစ်ထည့်သွင်းမှု)": [
                "အိမ်ခြံမြေများကို ထည့်သွင်း/ပြင်ဆင်နိုင်ခြင်း (ခေါင်းစဉ်၊ အိမ်အမျိုးအစား၊ ပိုင်ဆိုင်မှုအမျိုးအစား၊ စျေးနှုန်း၊ ဧရိယာ၊ မြေဧရိယာ၊ အထပ်အရေအတွက်၊ အိပ်ခန်း/ရေချိုးခန်းအရေအတွက်)",
                "တည်နေရာအချက်အလက်များ (မြို့၊ မြို့နယ်၊ လိပ်စာ၊ မြေပုံကိုဩဒိနိတ်)",
                "အနီးအနားအဆင်ပြေမှုများ (ကျောင်း၊ ဆေးရုံ၊ စျေးကွက်)",
                "အဆင်ပြေမှုများ၊ ချိန်းဆိုချိန်၊ မှတ်ချက်များ",
                "အခြေအနေ: ရနိုင်သည်၊ ရောင်းပြီး/ငှားပြီး၊ ငြင်းပယ် (အကြောင်းပြချက်ဖြင့်)",
            ],
            "💰 တောင်းဆိုမှုများနှင့် အကြံပြုမှုများ": [
                "ဖောက်သည်များမှ ရောင်း/ငှားလိုအပ်ချက်များ (မြို့၊ ဘတ်ဂျက်၊ အိမ်အမျိုးအစား) တင်သွင်းနိုင်သည်။",
                "စနစ်မှ လိုအပ်ချက်နှင့် ကိုက်ညီသော အိမ်ခြံမြေများကို ရှာဖွေပြီး အက်မင်ထံ အကြံပြုပေးသည်။",
            ],
            "🛒 Third-Party ရောင်းသူများအတွက် စနစ်": {
                အိမ်ခြံမြေများ: [
                    "ဖောက်သည်များသည် ရောင်း/ငှား/အသစ်ထည့်သွင်းမှုများ တင်သွင်းနိုင်သည်။",
                    "အက်မင်မှ အတည်ပြု/ငြင်းပယ်နိုင်သည်။",
                ],
                ဆိုင်များ: [
                    "ဖောက်သည်များသည် မိမိဆိုင်ဖွင့်ပြီး ပစ္စည်းများ ပြသနိုင်သည်။",
                ],
                အထွေထွေ: [
                    "ပစ္စည်းရောင်းရန်အတွက် Package ဝယ်ယူရန်လိုအပ်သည်။",
                    "ဧည့်သည်များမှ မှတ်ချက်များနှင့် အဆင့်သတ်မှတ်နိုင်သည်။",
                ],
            },
            "📰 အသိပညာဗဟုသုတ": [
                "အိမ်ခြံမြေစျေးကွက်သတင်း/ဆောင်းပါးများ CRUD",
                "အခြေခံအချက်အလက်များ စီမံခန့်ခွဲမှု (မြို့၊ မြို့နယ်၊ အိမ်အမျိုးအစား၊ ပိုင်ဆိုင်မှုအမျိုးအစား၊ ကျောင်း၊ ဆေးရုံ၊ စျေးကွက်)",
            ],
            "🛠️ အက်မင်စနစ်များ": [
                "ဝန်ထမ်းနှင့် ခွင့်ပြုချက်များ (အက်မင်၊ အေးဂျင့်၊ ရောင်းသူများအတွက်)",
                "Package စီမံခန့်ခွဲမှု (Third-party ရောင်းသူများအတွက် စာရင်းသွင်းစနစ်)",
                "ဆိုက်အပြင်အဆင်များ (လိုဂို၊ ဘန်နာ၊ အကြောင်းအရာစာမျက်နှာ)",
            ],
        },
        myContributions:
            "Junior Developer အဖြစ် အိမ်ခြံမြေစနစ်တစ်ခုကို ပြုပြင်ထိန်းသိမ်းခြင်း၊ အမှားများပြင်ဆင်ခြင်း၊ အသစ်သောအင်္ဂါရပ်များ ထည့်သွင်းခြင်းနှင့် Client UI ကို ပြန်လည်တည်ဆောက်ခြင်းများ ပြုလုပ်ခဲ့ပါသည်။",
    },

    techStack: ["laravel", "blade", "bootstrap", "jquery", "backpack", "mysql"],
    category: "company",
    photos: [
        "SaleList.png",
        "RentList.png",
        "NewPropertyList.png",
        "SaleCreate1.png",
        "SaleCreate2.png",
        "SaleCreate3.png",
        "SaleClose.png",
        "SaleReject.png",
        "SaleAppointment.png",
        "RentAppointment.png",
        "AdminUser.png",
        "FrontendUsers.png",
        "Roles.png",
        "HomeSale.png",
        "RentOffer.png",
        "HomeFilter.png",
        "Map.png",
        "HomeType.png",
        "OwnerShipTypes.png",
        "CompanyTypes.png",
        "Currency.png",
        "PopularPlace.png",
        "Hospitals.png",
        "Schools.png",
        "Lawyers.png",
        "Knowledge.png",
        "KnowledgeAdmin.png",
        "HomeBanner.png",
        "Footer.png",
        "Dashboard.png",
    ],
};

export const ShweAutomobile: ProjectProp = {
    name: "Shwe Automobile",
    [LANGs.ENGLISH]: {
        description:
            "A modern automobile showroom platform with a client-facing vehicle showcase, maintenance service requests, and a backend for managing vehicles, brands, users, and homepage content — complete with member notifications and role-based access.",
        features: {
            "🏠 Frontend Pages": [
                "Home Page: Hero section, About Us, Contact Form",
                "Vehicle Showcase: List all available cars by brand/category",
                "Vehicle Detail Page: Full specs, images, pricing",
                "Maintenance Services: View service plans & customize options",
                "Member Access: Exclusive updates & new arrival notifications",
            ],
            "🛠️ Management": {
                "🚗 Vehicle Management": [
                    "Add, edit, delete vehicle brands, categories, and models",
                    "Manage vehicle specs: title, price, year, engine, images, status",
                    "Filtering by brand, category, availability",
                    "Highlight featured vehicles on homepage",
                ],
                "🔧 Maintenance Plans": [
                    "Admin manages standard service packages",
                    "Clients can customize services based on their needs",
                    "Track client bookings and service history",
                ],
                "🔐 User Roles & Memberships": [
                    "Public users can browse vehicles",
                    "Members get real-time updates on new arrivals",
                    "Admin manages user roles and permissions",
                ],
                "⚙️ Frontend Management": [
                    "Banner text & video",
                    "About company text and avaliable vehicle brands",
                    "Contact informations",
                ],
            },
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "မော်တော်ယာဉ်ပြပွဲစနစ်တစ်ခုဖြစ်ပြီး၊ မိတ်ဆွေအတွက် ယာဉ်စာရင်းကြည့်ရှုခြင်း၊ ပြုပြင်ထိန်းသိမ်းမှုဝန်ဆောင်မှုတောင်းဆိုခြင်းနှင့် အက်မင်ဘက်မှ ယာဉ်များ၊ အမှတ်တံဆိပ်များ၊ ဝန်ထမ်းများနှင့် မူလစာမျက်နှာအကြောင်းအရာများကို စီမံခန့်ခွဲနိုင်သော စနစ်ဖြစ်သည်။ အသစ်ထွက်မည့်ယာဉ်များအတွက် အသိပေးချက်များလည်း ပါဝင်သည်။",
        features: {
            "🏠 မျက်နှာစာမျက်နှာများ": [
                "ဟီရိုဓာတ်ပုံ၊ ကုမ္ပဏီအကြောင်းအရာ၊ ဆက်သွယ်ရန်ပုံစံ",
                "ကားစာရင်းစာမျက်နှာ - ကားများစာရင်းကို ကြည့်ရှုခြင်း",
                "ကားအသေးစိတ်စာမျက်နှာ - အလုပ်လုပ်ပုံ၊ ဈေးနှုန်း၊ ဓာတ်ပုံများ",
                "ဝန်ဆောင်မှုစာမျက်နှာ - ဝန်ဆောင်မှုအစီအစဉ်များနှင့် ပုဂ္ဂလိကဝန်ဆောင်မှုများ",
                "ဝယ်သူများအတွက် အဖွဲ့ဝင်စာရင်းထဲသို့ဝင်ရောက်ခြင်းနှင့် အသစ်များကိုအသိပေးခြင်း",
            ],
            "🛠️ စီမံခန့်ခွဲမှု": {
                "🚗 ကားစီမံခန့်ခွဲမှု": [
                    "ကားများအား ဖန်တီးခြင်း၊ ပြင်ဆင်ခြင်း၊ ဖျက်ခြင်း",
                    "ကားအမျိုးအစား၊ ကားအမှတ်တံဆိပ်များစီမံခန့်ခွဲခြင်း",
                    "ကားများကို ကြည့်ရှုခြင်းအတွက် စီစစ်ခြင်း (အမှတ်တံဆိပ်၊ အမျိုးအစားအလိုက်)",
                    "မိမိကြိုက်နှစ်သက်သောကားများကို စာရင်းသွင်းခြင်း",
                ],
                "🔧 ဝန်ဆောင်မှုစီမံခန့်ခွဲမှု": [
                    "ဝန်ဆောင်မှုအစီအစဉ်များကို စီမံခန့်ခွဲခြင်း",
                    "ဝယ်သူများက ဝန်ဆောင်မှုကို ပုဂ္ဂလိကအစီအစဉ်ဖြင့် ပြင်ဆင်နိုင်ခြင်း",
                    "ဝန်ဆောင်မှုစာရင်းများကို စီမံခန့်ခွဲခြင်း",
                ],
                "🔐 ဝယ်သူနှင့် ဝန်ထမ်းစီမံခန့်ခွဲမှု": [
                    "အသုံးပြုသူများကို အမျိုးအစားခွဲခြင်း",
                    "အဖွဲ့ဝင်များအတွက် အသစ်ထွက်ရှိသောကားများကို အသိပေးခြင်း",
                    "ဝန်ထမ်းများကို တာဝန်ခွဲဝေပေးခြင်း",
                ],
                "⚙️ ပင်မစာမျက်နှာစီမံခန့်ခွဲမှု": [
                    "မိတ်ဆက်စာတန်းနှင့်ဗီဒီယိုပြုပြင်ခြင်း",
                    "ဆိုင်အကြောင်း၊ ရန်ုင်သော ကားဘရန်းများ",
                    "ဆက်သွယ်ရန် အကြောင်းအရာများ",
                ],
            },
        },
        myContributions: "",
    },
    techStack: ["laravel", "blade", "bootstrap"],
    category: "own",
    photos: [
        "Hero.png",
        "About.png",
        "Contact.png",
        "FrontendVehicle.png",
        "FrontendRegulateMaintainance.png",
        "FrontendCustomMaintainance.png",
        "BackendBrands.png",
        "BackendCategories.png",
        "BackendVehicles.png",
        "VehicleDetail.png",
        "RegularMaintainanceCreate.png",
        "BackendUserDetail.png",
        "BackendUsers.png",
        "BackendVehicleShow.png",
        "Roles.png",
    ],
};

export const Portfolio3d: ProjectProp = {
    name: "3D Portfolio",
    [LANGs.ENGLISH]: {
        description:
            "A 3D portfolio website built by following a JS Mastery tutorial. It features interactive Three.js models, GSAP animations, and a modern layout with sections like Hero, Projects, Experience, Testimonials, Tech Stack, and Contact.",
        features: {
            "🌐 Hero Section": [
                "Hero text intro with 3D animated intro using Three.js and React Three Fiber",
            ],
            "📁 Projects": ["Showcase of selected works with hover animations"],
            "💼 Experience": [
                "Timeline-style layout of past roles or learning milestones",
            ],
            "💬 Testimonials": ["Client or peer feedback carousel"],
            "🧰 Tech Stack": ["3d Icons and labels for technologies used"],
            "📨 Contact": ["Form with EmailJS integration"],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "Project က JS Mastery ၏ Tutorial ကို အခြေခံပြီး တည်ဆောက်ထားတဲ့ 3D Portfolio Website ဖြစ်ပါတယ်။ Three.js နဲ့ 3D မော်ဒယ်များ၊ GSAP နဲ့ animation များ၊ နောက်ဆုံးပေါ် Layout များပါဝင်ပြီး Hero, Projects, Experience, Testimonials, Tech Stack, Contact စတဲ့ Section များပါဝင်ပါတယ်။",
        features: {
            "🌐 Hero Section": [
                "Three.js နဲ့ React Three Fiber ကို အသုံးပြုပြီး 3D animation ပါဝင်တဲ့ Hero စာမျက်နှာအဖွင့်အကြောင်းအရာ",
            ],
            "📁 Projects": [
                "လုပ်ခဲ့တဲ့ Project များကို ပြသထားပြီး Hover Animations ပါဝင်သည်",
            ],
            "💼 Experience": [
                "အလုပ်အတွေ့အကြုံများ သို့မဟုတ် လေ့လာမှုအဆင့်များကို Timeline ပုံစံဖြင့် ပြသထားသည်",
            ],
            "💬 Testimonials": [
                "ဖောက်သည်များ သို့မဟုတ် မိတ်ဆွေများ၏ အမြင်များကို Carousel ပုံစံဖြင့် ပြသခြင်း",
            ],
            "🧰 Tech Stack": [
                "အသုံးပြုထားသော နည်းပညာများကို 3D Icons နှင့် Label များဖြင့် ပြသခြင်း",
            ],
            "📨 Contact": [
                "EmailJS ကို အသုံးပြုပြီး ဆက်သွယ်ရန် Form တစ်ခု ထည့်သွင်းထားသည်",
            ],
        },
        myContributions: "",
    },
    techStack: ["react", "tailwind", "threejs", "gsap", "emailjs"],
    category: "tutorial",
    photos: [
        "Hero.png",
        "Projects.png",
        "Experience.png",
        "Services.png",
        "Techstact.png",
        "Testimonial.png",
        "Contact.png",
    ],
};

export const IPhonePage: ProjectProp = {
    name: "I Phone",
    [LANGs.ENGLISH]: {
        description:
            "A captivating and immersive website built by following a JS Mastery tutorial designed to showcase the latest iPhone, highlighting its cutting-edge features and stunning design through dynamic visuals and interactive elements.",
        features: {
            "🎬 Hero Intro": [
                "An introductory video showcasing the phone’s design and presence.",
            ],
            "✨ Feature Highlights": [
                "Three short videos that showcase the phone’s materials, craftsmanship, and standout features.",
            ],
            "📱 Interactive 3D Phone Model": [
                "Delivers an immersive, hands-on experience of the device through real-time interaction.",
                "Users can rotate the phone 360°, zoom in/out to explore details, and switch between color variants.",
            ],
            "🚀 SoC Performance Overview": [
                "Highlights the phone’s System-on-Chip (SoC) and its performance capabilities.",
            ],
            "📺 Display Experience": [
                "Demonstrates the phone’s screen quality and media playback experience through a simulated video view.",
            ],
        },
        myContributions:
            "Designed content flow, collaborated on visual concepts, and crafted compelling marketing copy for the hero page elements.",
    },
    [LANGs.MYANMAR]: {
        description:
            "JS Mastery ၏ Tutorial ကို အခြေခံပြီး တည်ဆောက်ထားတဲ့ နောက်ဆုံးပေါ် iPhone ၏ ထူးခြားသောလုပ်ဆောင်ချက်များနှင့် လှပသောဒီဇိုင်းများကို ပြောင်းလဲနေသော မြင်ကွင်းများနှင့် အပြန်အလှန်တုံ့ပြန်မှုဆိုင်ရာ အစိတ်အပိုင်းများမှတစ်ဆင့် ပြသရန်အတွက် ဖန်တီးထားသည့် ဆွဲဆောင်မှုရှိပြီး စွဲမက်ဖွယ်ကောင်းသော ဝဘ်ဆိုဒ်ဖြစ်သည်။",
        features: {
            "🎬 Hero Intro": [
                "ဖုန်းကို မိတ်ဆက်ပေးသည့် အကျဉ်းချုပ်ဗီဒီယိုတစ်ခုပါဝင်သည်။",
            ],
            "✨ Feature Highlights": [
                "ဖုန်း၏ ပစ္စည်းအရည်အသွေး၊ ထူးခြားသောအင်္ဂါရပ်များကို ပြသသည့် ဗီဒီယို ၃ ခုပါဝင်သည်။",
            ],
            "📱 Interactive 3D Phone Model": [
                "အသုံးပြုသူအနေနဲ့ ဖုန်းကို လက်တွေ့ထိတွေ့သုံးစွဲသကဲ့သို့ ခံစားနိုင်အောင် 3D ပုံစံဖြင့် ဖော်ပြထားသည်။",
                "ဖုန်းကို ၃၆၀ ဒီဂရီ လှည့်ကြည့်နိုင်ပြီး၊ ချုံ့/ချဲ့ကြည့်နိုင်သလို၊ အရောင်ရွေးချယ်မှုလည်း ပြောင်းလဲနိုင်သည်။",
            ],
            "🚀 SoC Performance Overview": [
                "ဖုန်းတွင် အသုံးပြုထားသော SoC (System on Chip) ၏ စွမ်းဆောင်ရည်ကို ဖော်ပြထားသည်။",
            ],
            "📺 Display Experience": [
                "ဖုန်း၏ မျက်နှာပြင်နည်းပညာနှင့် မီဒီယာကြည့်ရှုမှုအတွေ့အကြုံကို ဗီဒီယိုဖြင့် ဖော်ပြထားသည်။",
            ],
        },
        myContributions:
            "Hero Page အတွက် အကြောင်းအရာစီးဆင်းမှုကို ဒီဇိုင်းဆွဲခြင်း၊ မြင်ကွင်းဆိုင်ရာ အယူအဆများတွင် ပူးပေါင်းဆောင်ရွက်ခြင်းနှင့် ဆွဲဆောင်မှုရှိသော စျေးကွက်ရှာဖွေရေး စာသားများကို ဖန်တီးခြင်း။",
    },
    techStack: ["react", "tailwind", "threejs", "gsap"],
    category: "tutorial",
    photos: [
        "Hero.png", // Example names for potential screenshots
        "HightLight.png",
        "Product.png",
        "Chip.png",
        "Screen.png",
    ],
};

export const NikePage: ProjectProp = {
    name: "Nike Website",
    [LANGs.ENGLISH]: {
        description:
            "A modern, responsive Nike-themed landing page built by following a JS Mastery tutorial featuring a bold hero section, product highlights, feature callouts, promotional offers, customer reviews, and a clean footer.",
        features: {
            Hero: [
                "Hero section with bold headline, subtext, and product carousel showcasing the latest Nike collection.",
            ],
            Products: [
                "Product showcase grid displaying various Nike shoes with hover effects and pricing.",
            ],
            Feature: [
                "Feature/value proposition section emphasizing product quality, comfort, and design — paired with imagery.",
            ],
            Offer: [
                "Promotional offer section highlighting discounts or seasonal deals with strong call-to-action.",
            ],
            Review: [
                "Testimonial section titled 'What Our Customers Say' featuring customer feedback and ratings.",
            ],
            Footer: [
                "Footer with navigation links, social media icons, and brand information.",
            ],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "ဒီ Project က JS Mastery ၏ Tutorial ကို အခြေခံပြီး တည်ဆောက်ထားတဲ့ Nike အမှတ်တံဆိပ် Landing Page ဖြစ်ပါတယ်။ Hero Section, Product များပြသမှု, အထူးအင်္ဂါရပ်များ, Offer များ, ဖောက်သည်အမြင်များနဲ့ Footer တို့ပါဝင်သည်။",
        features: {
            Hero: [
                "Nike ၏ နောက်ဆုံးထွက် Collection များကို ပြသသည့် Hero Section ဖြစ်ပြီး၊ ခေါင်းစဉ်၊ အကြောင်းအရာနှင့် Product Carousel ပါဝင်သည်။",
            ],
            Products: [
                "Nike ဖိနပ်များကို Grid ပုံစံဖြင့် ပြသထားပြီး Hover Effect များနှင့် စျေးနှုန်းများပါဝင်သည်။",
            ],
            Feature: [
                "ဖိနပ်၏ အရည်အသွေး၊ သက်တောင့်သက်သာဖြစ်မှုနှင့် ဒီဇိုင်းအထူးအင်္ဂါရပ်များကို ရှင်းလင်းဖော်ပြထားသော Section ဖြစ်သည်။",
            ],
            Offer: [
                "လျှော့စျေးများ သို့မဟုတ် ရာသီအလိုက်ပရိုမိုးရှင်းများကို ပြသသည့် Offer Section ဖြစ်သည်။",
            ],
            Review: [
                "ဖောက်သည်များ၏ အမြင်များ၊ အဆင့်သတ်မှတ်ချက်များကို ပြသထားသော Testimonial Section ဖြစ်သည်။",
            ],
            Footer: [
                "နောက်ဆုံးတွင် Navigation Link များ၊ Social Media Icon များနှင့် Brand အကြောင်းအရာများပါဝင်သော Footer ဖြစ်သည်။",
            ],
        },

        myContributions: "",
    },
    techStack: ["css", "react"],
    category: "tutorial",
    photos: [
        "Hero.png",
        "Products.png",
        "Feature.png",
        "Offer.png",
        "Review.png",
        "Footer.png",
    ],
};

export const TravelAgencyAdmin: ProjectProp = {
    name: "Travel Agency Admin Panel",
    [LANGs.ENGLISH]: {
        description:
            "A trip management dashboard that displays user and trip statistics, allows trip creation, and shows detailed trip and user information. Designed for admin use with interactive charts and clean UI.",
        features: {
            Dashboard: [
                "Displays key statistics such as total users, total trips, and today's active users",
                "Shows the 4 most recent trips for quick access",
                "Includes interactive graphs for user growth and trip style distribution",
                "Lists the latest user signups for admin visibility",
            ],
            Trips: [
                "Trip list view with filtering and sorting options",
                "Create new trip with form validation and input fields",
                "Detailed trip view including itinerary, participants, and trip metadata",
            ],
            Users: [
                "User list with basic information, roles, and management options",
            ],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "အသုံးပြုသူများနှင့် ခရီးစဉ်အချက်အလက်များကို စီမံခန့်ခွဲနိုင်သော Dashboard ဖြစ်ပြီး၊ ခရီးစဉ်အသစ်ဖန်တီးခြင်း၊ အသေးစိတ်ကြည့်ရှုခြင်းနှင့် စာရင်းပြသမှုများပါဝင်သည်။ Admin များအတွက် အသုံးပြုရလွယ်ကူသော UI နှင့် ဂရပ်များပါဝင်သည်။",
        features: {
            Dashboard: [
                "စုစုပေါင်းအသုံးပြုသူအရေအတွက်၊ ခရီးစဉ်အရေအတွက်နှင့် ယနေ့ Active User များကို ပြသခြင်း",
                "နောက်ဆုံးခရီးစဉ် ၄ ခုကို အမြန်ကြည့်ရှုနိုင်အောင် ပြသခြင်း",
                "အသုံးပြုသူတိုးတက်မှုနှင့် ခရီးစဉ်အမျိုးအစားခွဲခြားမှုများကို ဂရပ်ဖြင့် ဖော်ပြခြင်း",
                "အသစ်စာရင်းသွင်းထားသော အသုံးပြုသူများကို စာရင်းအဖြစ် ပြသခြင်း",
            ],
            Trips: [
                "ခရီးစဉ်စာရင်းကို စီစဉ်ခြင်းနှင့် ရှာဖွေရန် Option များဖြင့် ပြသခြင်း",
                "Form ဖြည့်သွင်းမှုနှင့် အတည်ပြုမှုများပါဝင်သော ခရီးစဉ်အသစ်ဖန်တီးခြင်း",
                "ခရီးစဉ်အသေးစိတ်အချက်အလက်များ၊ ပါဝင်သူများနှင့် itinerary ကို ကြည့်ရှုနိုင်သော Detail View",
            ],
            Users: [
                "အသုံးပြုသူစာရင်း၊ အခြေခံအချက်အလက်များနှင့် စီမံခန့်ခွဲမှုလုပ်ဆောင်ချက်များပါဝင်သည်",
            ],
        },
        myContributions: "",
    },
    category: "tutorial",
    techStack: [
        "react",
        "react-router",
        "tailwind",
        "syncfusion",
        "appwrite",
        "unsplash",
    ],
    photos: [
        "Dashboard1.png",
        "Dashboard2.png",
        "Dashboard3.png",
        "Dashboard4.png",
        "Dashboard5.png",
        "Users.png",
        "TripCreate1.png",
        "TripCreate2.png",
        "TripDetail1.png",
        "TripDetail2.png",
        "TripDetail3.png",
        "TripDetial4.png",
        "TripList.png",
    ],
};

export const SnakeVsAiGame: ProjectProp = {
    name: "Snake Vs Ai Game",
    [LANGs.ENGLISH]: {
        description:
            "A 2D multiplayer Snake game built with HTML5 Canvas following by Franks laboratory tutorial. It supports up to 4 players — 2 controlled by keyboard and 2 by AI — each with a unique snake design. Players can choose their snake and set AI difficulty. Snakes grow by eating food and lose health when touching toxic items.",
        features: {
            Players: [
                "Supports up to 4 players (2 human, 2 AI)",
                "Each player can use seperate snake design",
                "Players can select AI difficulty",
            ],
            Gameplay: [
                "Snakes grow by eating food",
                "Toxic items reduce snake health",
            ],
            Controls: [
                "Two players use keyboard controls (WASD and Arrow keys)",
                "AI snakes move based on difficulty level",
            ],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "Franks laboratory ရဲ့သင်ခန်းစာကိုလိုက်လုပ်ပြိး  တည်ဆောက်ထားသော 2D Snake Game ဖြစ်ပါတယ်။ စုစုပေါင်း ၄ ယောက်ကစားနိုင်ပြီး၊ ၂ ယောက်ကို Keyboard ဖြင့် ထိန်းချုပ်နိုင်ပြီး၊ အခြား ၂ ယောက်ကို AI ဖြင့် ထိန်းချုပ်နိုင်ပါတယ်။ Player များသည် မိမိကြိုက်သော Snake ကို ရွေးချယ်နိုင်ပြီး AI အဆင့်ကိုလည်း သတ်မှတ်နိုင်ပါသည်။ အစားအစာကို စားခြင်းဖြင့် Snake ကြီးလာပြီး၊ အဆိပ်အရာများကို ထိမိလျှင် ကျန်းမာရေးလျော့နည်းသွားပါသည်။",
        features: {
            ကစားသမားများ: [
                "ကစားသမား 4 ယောက်အထိ (လူ 2 ယောက်၊ AI 2 ယောက်)",
                "ကစားသမားတိုင်းတွင် ထူးခြားသော မြွေပုံစံ ရှိသည်",
                "ကစားသမားများသည် AI အခက်အခဲကို ရွေးချယ်နိုင်သည်",
            ],
            ကစားခြင်း: [
                "အစာစားခြင်းဖြင့် မြွေများကြီးထွားလာမည်။",
                "အဆိပ်အတောက်များသည် မြွေများကို ထိခိုက်စေမည်။",
            ],
            ထိန်းချုပ်မှုများ: [
                "ကစားသမားနှစ်ဦးသည် ကီးဘုတ်ထိန်းချုပ်မှုများကို အသုံးပြုသည် (WASD နှင့် Arrow ခလုတ်များ)",
                "AI မြွေများသည် အခက်အခဲအဆင့်ပေါ်မူတည်၍ ရွေ့လျားသည်",
            ],
        },
        myContributions: "",
    },
    techStack: ["html", "javascript"],
    category: "tutorial",
    photos: ["Menu.png", "Playground.png", "PlaygroundDebug.png"],
};

export const VirtualWorld: ProjectProp = {
    name: "Virtual World Editor",
    [LANGs.ENGLISH]: {
        description:
            "A browser-based virtual world editor and simulation environment built with JavaScript and HTML5 Canvas by following Radu Mariescu-Istodor. User can design roads, place objects, and simulate autonomous car behavior. Includes a mini-map, decision-making AI, and real-time driving logic.",
        features: {
            Editor: [
                "Draw and edit roads, intersections, and environments (house, tree) will auto place.",
                "Place cross, traffic light, parking area, ",
                "Save and load custom maps",
            ],
            Simulation: [
                "Load the virtual word.",
                "Autonomous car driving with AI decision-making",
                "Mini-map for navigation and overview",
            ],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "Radu Mariescu-Istodor သင်ခန်းစာအတိုင်း JavaScript နှင့် HTML5 Canvas ကို အသုံးပြုပြီး တည်ဆောက်ထားသော Virtual World Editor ဖြစ်သည်။ အသုံးပြုသူများသည် လမ်းကြောင်းများဖန်တီးခြင်း၊ ပစ္စည်းများတပ်ဆင်ခြင်းနှင့် မောင်းနှင်မှုအလိုအလျောက်လုပ်ဆောင်သော ကားများကို စမ်းသပ်နိုင်သည်။ Mini-map, AI ဆုံးဖြတ်ချက်များနှင့် အချိန်နှင့်တပြေးညီ မောင်းနှင်မှု logic များပါဝင်သည်။",
        features: {
            တည်းဖြတ်ရေးရာ: [
                "လမ်းများတည်းဖြတ်နိုင်ပြီး (အိမ်၊ သစ်ပင်) များကို  အလိုအလျောက်ထားပေးမည်။",
                "လမ်းကူးမျဥ်းကြား, မီးပွိုင့်, ရပ်နား‌နေရာများ နေရာချထားနိုင်သည်။",
                "နှစ်သက်ရာ virtual world ကိုရွေးချယ်ပြီး ပြုပြင်သိမ်းဆည်းနိုင်သည်။",
            ],
            စမ်းမောင်းနှင်ခြင်း: [
                "Virtual world ကိုတပ်ဆင်မည်",
                "Ai ကိုယ်ပိုင်ဆုံးဖြတ်ချက်ဖြင့် ကားအလိုလျောက်မောင်းနှင်ခြင်း",
                "ကားတည်နေရာအရ မြေပုံအသေး ကိုပြပေးမည်",
            ],
        },
        myContributions: "",
    },
    category: "tutorial",
    techStack: ["html", "javascript"],
    photos: [
        "worldeditor.png",
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
        "img6.png",
        "img7.png",
    ],
};

export const UniversitySite: ProjectProp = {
    name: "University Website",
    [LANGs.ENGLISH]: {
        description:
            "A responsive and informative university website that showcases the institution’s identity, academic offerings, and campus life. It includes sections like Home, About, Courses, Programs, and Contact — designed to guide prospective students and provide essential information.",
        features: {
            Home: [
                "Hero section with university tagline and call-to-action",
                "Campus overview with images or video",
                "Facilities highlights (library, labs, sports, cafeteria)",
            ],
            About: [
                "University history and mission",
                "Leadership and faculty introduction",
                "Accreditation and achievements",
            ],
            Courses: [
                "List of available courses by department or level",
                "Course descriptions and prerequisites",
                "Search and filter functionality",
            ],
            Programs: [
                "Undergraduate, graduate, and diploma programs",
                "Program duration, structure, and outcomes",
                "Application requirements",
            ],
            Contact: [
                "Contact form with validation",
                "Map and campus location",
                "Phone, email, and social media links",
            ],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "တက္ကသိုလ်၏ မျက်နှာစာ၊ သင်ကြားမှုများ၊ သင်ရိုးအစီအစဉ်များနှင့် ဆက်သွယ်ရန်အချက်အလက်များကို ပြသပေးသော Responsive University Website ဖြစ်သည်။ Home, About, Courses, Programs, Contact စသည့်အခန်းများပါဝင်ပြီး ကျောင်းသားအသစ်များအတွက် အသုံးဝင်သော အချက်အလက်များကို တိကျပြသထားသည်။",
        features: {
            Home: [
                "တက္ကသိုလ်၏ မျက်နှာစာ Hero Section (Tagline နှင့် CTA ပါဝင်သည်)",
                "ကျောင်းဝင်းအကြောင်းအရာများ (ဓာတ်ပုံ သို့မဟုတ် ဗီဒီယို)",
                "စာကြည့်တိုက်၊ ဓာတ်ခွဲခန်း၊ အားကစားကွင်း၊ စားသောက်ဆိုင် စသည့် Facilities များ",
            ],
            About: [
                "တက္ကသိုလ်၏ သမိုင်းကြောင်းနှင့် ရည်ရွယ်ချက်",
                "အုပ်ချုပ်ရေးအဖွဲ့နှင့် ဆရာများအကြောင်း",
                "အသိအမှတ်ပြုလက်မှတ်များနှင့် ဆုများ",
            ],
            Courses: [
                "ဌာနအလိုက် သင်ကြားမည့်ဘာသာရပ်များစာရင်း",
                "သင်တန်းအကြောင်းအရာနှင့် လိုအပ်ချက်များ",
                "ရှာဖွေရန်နှင့် စီစဉ်ရန် Option များ",
            ],
            Programs: [
                "ဘွဲ့ကြို၊ ဘွဲ့လွန်နှင့် Diploma သင်ရိုးအစီအစဉ်များ",
                "သင်တန်းကြာချိန်၊ ဖွဲ့စည်းပုံနှင့် ရလဒ်များ",
                "လျှောက်လွှာအတွက်လိုအပ်ချက်များ",
            ],
            Contact: [
                "Form ဖြင့် ဆက်သွယ်ရန် (Validation ပါဝင်သည်)",
                "တက္ကသိုလ်တည်နေရာမြေပုံ",
                "ဖုန်းနံပါတ်၊ အီးမေးလ်နှင့် လူမှုမီဒီယာ Link များ",
            ],
        },
        myContributions: "",
    },
    category: "tutorial",
    techStack: ["html", "css", "javascript"],
    photos: [
        "Hero.png",
        "About.png",
        "Contact.png",
        "Cources.png",
        "Campus.png",
        "Facilities.png",
        "Programs.png",
        "Review.png",
    ],
};

export const SocialMediaApp: ProjectProp = {
    name: "Social Media App",
    [LANGs.ENGLISH]: {
        description:
            "A basic social media web application built by following a tutorial from the Quick Programming YouTube channel. Developed using the MVC architecture, the app allows users to create and edit profiles, post content, and interact through comments. It demonstrates core CRUD operations and user interaction flows in a structured MVC pattern.",
        features: {
            Profile: [
                "User can register and create an account",
                "Edit profile information such as name, bio, and profile picture",
            ],
            Posts: [
                "Create new posts with text or media",
                "Edit or delete existing posts",
                "Add comments to posts",
                "Reply to existing comments in threaded format",
            ],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "Quick Programming YouTube Channel ၏ Tutorial ကို အခြေခံပြီး တည်ဆောက်ထားသော Social Media Web App ဖြစ်သည်။ MVC Architecture ကို အသုံးပြုပြီး Profile ဖန်တီးခြင်း၊ ပြင်ဆင်ခြင်း၊ Post များတင်ခြင်းနှင့် Comment ဖြင့် အပြန်အလှန် ဆက်သွယ်နိုင်သည်။ CRUD လုပ်ဆောင်ချက်များနှင့် အသုံးပြုသူအပြန်အလှန်လုပ်ဆောင်မှုများကို MVC ပုံစံဖြင့် ရေးသားထားသည်။",
        features: {
            Profile: [
                "အသုံးပြုသူအသစ်အဖြစ် Register လုပ်၍ အကောင့်ဖန်တီးနိုင်သည်",
                "နာမည်၊ ကိုယ်ရေးအချက်အလက်၊ ပရိုဖိုင်ဓာတ်ပုံများကို ပြင်ဆင်နိုင်သည်",
            ],
            Posts: [
                "စာသား သို့မဟုတ် မီဒီယာဖြင့် Post အသစ်တင်နိုင်သည်",
                "တင်ထားသော Post များကို ပြန်လည်ပြင်ဆင်ခြင်း သို့မဟုတ် ဖျက်နိုင်သည်",
                "Post များအောက်တွင် Comment များရေးနိုင်သည်",
                "Comment များအောက်တွင် အကြောင်းပြန် (Reply) များရေးနိုင်သည်",
            ],
        },
        myContributions: "",
    },
    category: "tutorial",
    techStack: ["html", "bootstrap", "php", "mysql"],
    photos: [
        "Profile.png",
        "ProfileEdit.png",
        "PostCreate.png",
        "PostList.png",
        "Comments.png",
        "CommentCreate.png",
    ],
};

export const PhpEcommerceApp: ProjectProp = {
    name: "Ecommerce Platform",
    [LANGs.ENGLISH]: {
        description:
            "A tutorial of @KhanamCoding building an ecommerce platform with php. It include Brands, Categories, Products, Orders",
        features: {
            "Client Side": [
                "Product list with image, price, and detail view",
                "Add to cart and update quantity",
                "View cart and remove items",
                "Place order and view order history",
                "Edit or cancel orders (if allowed)",
                "View order details with status and items",
                "User registration, login, and profile editing",
            ],
            "Admin Panel": [
                "Admin login and profile management",
                "Product management (add/edit/delete)",
                "Brand and category management",
                "View and manage customer orders",
            ],
        },
        myContributions: "",
    },
    [LANGs.MYANMAR]: {
        description:
            "@KhanamCodingရဲ့ phpဖြင့်ရေးသားသော အွန်လိုင်းစျေးဝယ်ဝဘ်ဆိုဒ်သင်ခန်းစာဖြစ်ပါတယ်။ သူမှာ ဘရန်းများ, အမျိုးစားများ, ထုတ်ကုန်များ, အမှာစာများ ပါဝင်သည်။",
        features: {
            ဝယ်ယူသူအပိုင်း: [
                "ပစ္စည်းစာရင်း (ဓာတ်ပုံ၊ စျေးနှုန်း၊ အသေးစိတ်အချက်အလက်များ)",
                "Add to Cart လုပ်ဆောင်ချက်",
                "Cart တွင် ပစ္စည်းများကို ကြည့်ရှု၊ ပြင်ဆင်၊ ဖျက်နိုင်ခြင်း",
                "Order တင်နိုင်ခြင်းနှင့် Order မှတ်တမ်းကြည့်ရှုခြင်း",
                "Order ပြင်ဆင်ခြင်း သို့မဟုတ် ပယ်ဖျက်ခြင်း (ခွင့်ပြုထားပါက)",
                "Order အသေးစိတ်အချက်အလက်များ (Status နှင့် ပစ္စည်းများ)",
                "အသုံးပြုသူအကောင့်ဖွင့်ခြင်း၊ Login နှင့် Profile ပြင်ဆင်ခြင်း",
            ],
            စီမံမှုအပိုင်း: [
                "Admin Login နှင့် ကိုယ်ရေးအချက်အလက်စီမံခန့်ခွဲမှု",
                "Product များကို ထည့်သွင်း၊ ပြင်ဆင်၊ ဖျက်နိုင်ခြင်း",
                "Brand နှင့် Category များစီမံခန့်ခွဲခြင်း",
                "ဖောက်သည် Order များကို ကြည့်ရှုနှင့် စီမံနိုင်ခြင်း",
            ],
        },
        myContributions: "",
    },
    category: "tutorial",
    techStack: ["html", "css", "bootstrap", "javascript", "php", "mysql"],
    photos: [
        "AdminBrand.png",
        "ClientOrderList.png",
        "ProductCreate.png",
        "ProfileEdit1.png",
        "AdminCategory.png",
        "ClientProducts.png",
        "ProductEdit1.png",
        "ProfileEdit2.png",
        "AdminOrderList.png",
        "ClientProfile.png",
        "ProductEdit2.png",
        "Cart.png",
        "OrderEdit.png",
        "ProductList.png",
    ],
};
const ProjectPage = {
    [LANGs.ENGLISH]: {
        label: "My Projects",
        description:
            "Here’s a collection of projects I’ve worked on. Most of them were built by following YouTube tutorials. I didn’t fully understand everything, but I completed most of them and learned a lot along the way.",
    },
    [LANGs.MYANMAR]: {
        label: "ကျွန်တော့်ပရောဂျက်များ",
        description:
            "ဒီမှာ ကျွန်တော် လုပ်ခဲ့တဲ့ Project များကို စုစည်းထားပါတယ်။ အများစုက YouTube Tutorial တွေကိုလိုက်နာပြီး တည်ဆောက်ခဲ့တာဖြစ်ပါတယ်။ အားလုံးကို နားမလည်သေးပေမယ့် အများစုကို ပြီးမြောက်အောင်လုပ်နိုင်ခဲ့ပြီး လေ့လာမှုတွေကိုလည်း ရရှိခဲ့ပါတယ်။",
    },
};

const AllProjects = [
    DiaryApp,
    RiceMillApp,
    RealEstateApp,
    ShweAutomobile,
    IPhonePage,
    Portfolio3d,
    NikePage,
    TravelAgencyAdmin,
    SnakeVsAiGame,
    SocialMediaApp,
    VirtualWorld,
    UniversitySite,
    PhpEcommerceApp
];

export default { ProjectPage, AllProjects };
