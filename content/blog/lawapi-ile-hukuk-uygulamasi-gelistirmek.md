---
title: "LawAPI ile hukuk uygulaması geliştirmek"
excerpt: "Geliştiriciler için: birkaç satır kodla mevzuat ve içtihat verisine erişen bir asistan nasıl kurulur?"
category: "Mühendislik"
date: "2026-05-18"
author: "HukukLabs Ekibi"
---

LawAPI, Türk mevzuatı ve Yargıtay içtihatlarına programatik erişim sağlayan REST API'dir. Bu yazıda basit bir hukuki asistan uygulamasının adım adım nasıl kurulacağını gösteriyoruz.

## LawAPI nedir?

LawAPI, HukukLabs'ın hukuki bilgi tabanını büyük dil modelleriyle birleştiren bir API katmanıdır. Geliştiriciler kendi uygulamalarına mevzuat arama, içtihat sorgulama ve hukuki analiz yetenekleri ekleyebilir.

## Temel endpoint'ler

```
GET  /v2/search      — Mevzuat ve içtihat araması
POST /v2/analyze      — Belge analizi
GET  /v2/legislation  — Kanun metni getirme
GET  /v2/precedent    — Yargıtay kararı sorgulama
```

## Hızlı başlangıç

API anahtarınızı aldıktan sonra birkaç satır kodla çalışmaya başlayabilirsiniz:

```javascript
const response = await fetch('https://api.hukuklabs.com/v2/search', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  params: {
    q: 'kira sözleşmesi feshi',
    type: 'precedent',
    limit: 5
  }
});

const results = await response.json();
```

## Kullanım senaryoları

- **Hukuk bürosu içi araçlar:** Mevzuat takibi ve içtihat araştırmasını iç portale entegre edin
- **Uyumluluk yazılımları:** KVKK, GDPR gibi düzenlemeleri otomatik kontrol edin
- **Eğitim platformları:** Hukuk öğrencileri için interaktif mevzuat keşif araçları oluşturun
- **Chatbot ve asistanlar:** Müvekkil sorularını mevzuat referanslarıyla yanıtlayan bot kurun

## Fiyatlandırma

LawAPI, kullandığın kadar öde modeliyle çalışır. Token başına ₺1.20 / 1K token. Aylık taahhüt yok, istediğiniz zaman durdurun.

[API anahtarı alın →](/giris)
