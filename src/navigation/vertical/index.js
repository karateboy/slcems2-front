export default [
  {
    title: '即時資訊',
    icon: 'ActivityIcon',
    children: [
      {
        title: '首頁',
        route: 'home',
        action: 'read',
        resource: 'Dashboard',
      },
      {
        title: '儀錶板',
        route: 'dashboard',
        action: 'read',
        resource: 'Dashboard',
      },
    ],
  },
  {
    title: '數據查詢',
    icon: 'DatabaseIcon',
    children: [
      {
        title: '歷史資料查詢',
        route: 'history-data',
        action: 'read',
        resource: 'Data',
      },
      {
        title: '歷史趨勢圖',
        route: 'history-trend',
        action: 'read',
        resource: 'Data',
      },
      {
        title: '玫瑰圖查詢',
        route: 'wind-rose-query',
        action: 'read',
        resource: 'Data',
      },
    ],
  },
  {
    title: '報表查詢',
    icon: 'BookOpenIcon',
    children: [
      {
        title: '監測報表',
        route: 'report',
        action: 'read',
        resource: 'Data',
      },
      {
        title: '月份時報表',
        route: 'monthly-hour-report',
        action: 'read',
        resource: 'Data',
      },
    ],
  },
  {
    title: '系統管理',
    icon: 'SettingsIcon',
    children: [
      {
        title: '儀器管理',
        route: 'instrument-management',
      },
      {
        title: '儀器狀態查詢',
        route: 'instrument-status',
      },
      {
        title: '測點管理',
        route: 'monitor-config',
      },
      {
        title: '測項管理',
        route: 'monitor-type-config',
      },
      {
        title: '數位訊號管理',
        route: 'signal-type-config',
      },
      {
        title: '人工資料註記',
        route: 'manual-audit',
      },
      {
        title: '人工註記查詢',
        route: 'audit-log-query',
      },
      {
        title: '使用者管理',
        route: 'user-management',
      },
      {
        title: '群組管理',
        route: 'group-management',
      },
      {
        title: '資料檢核設定',
        route: 'audit-config',
      },
      {
        title: '資料管理',
        route: 'data-management',
      },
      {
        title: 'CDX上傳設定',
        route: 'cdx-upload-config',
      },
      {
        title: '參數設定',
        route: 'system-config',
      },
    ],
  },
];
