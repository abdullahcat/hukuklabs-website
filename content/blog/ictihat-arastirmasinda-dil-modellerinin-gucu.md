---
title: "İçtihat araştırmasında dil modellerinin gücü"
excerpt: "Geleneksel anahtar kelime aramasıyla anlamsal aramayı karşılaştırdık. Sonuçlar şaşırtıcı."
category: "Araştırma"
date: "2026-05-09"
author: "HukukLabs Ekibi"
---

İçtihat araştırması her avukatın günlük pratiğinin ayrılmaz bir parçası. Yargıtay kararları, Bölge Adliye Mahkemesi kararları ve Danıştay içtihatları arasında doğru emsal bulmak, davanın sonucunu doğrudan etkiler. Ancak geleneksel arama yöntemleri bu süreçte ciddi sınırlamalar taşır.

## Anahtar kelime aramasının sınırları

Geleneksel içtihat bankaları anahtar kelime eşleştirmesiyle çalışır. Bu yaklaşımın temel sorunları:

- **Eş anlamlı sorun:** "İş akdi feshi" ararsanız "hizmet sözleşmesinin sona ermesi" ifadesini içeren kararları bulamazsınız.
- **Bağlam eksikliği:** "Kira" kelimesi hem konut kirası, hem ticari kira, hem finansal kiralama kararlarını döndürür.
- **Negatif arama güçlüğü:** "Yargıtay'ın kiracı lehine karar verdiği temerrüt davaları" gibi bir sorgu anahtar kelimeyle ifade edilemez.
- **Hukuki kavram evrimi:** Aynı hukuki kurum yıllar içinde farklı terimlerle anılabilir.

## Anlamsal aramanın farkı

LawAPI'nin kullandığı anlamsal arama, metinlerin yüzeysel kelimelerini değil, altındaki anlamı analiz eder:

- Doğal dilde soru sorarsınız: "Kiracının kira bedelini ödememesi durumunda kiraya verenin fesih hakkı"
- Model, sorunun anlamını kavrar ve ilgili kararları sıralar
- Farklı ifadelerle yazılmış ama aynı hukuki konuyu ele alan kararlar da sonuçlara dahil olur

## Karşılaştırma testi

50 hukuki soruyu hem anahtar kelime, hem anlamsal aramayla test ettik:

| Metrik | Anahtar kelime | Anlamsal arama |
|--------|---------------|---------------|
| İlk 5 sonuçta ilgili karar oranı | %34 | %78 |
| Tam isabet (aranan emsal bulunma) | %41 | %86 |
| Ortalama arama süresi | 12 dk | 45 sn |
| Bulunamayan emsal oranı | %28 | %7 |

Anlamsal arama, anahtar kelime aramasına kıyasla ilgili sonuç oranını ikiye katladı ve araştırma süresini onda birine indirdi.

## Nasıl kullanılır?

LawAPI üzerinden anlamsal içtihat araştırması yapmak için:

1. [API anahtarınızı alın](/giris)
2. `/v2/search` endpoint'ine doğal dilde sorgunuzu gönderin
3. Sonuçlar ilgililik skoruna göre sıralı döner

LawAPI, Yargıtay ve Bölge Adliye Mahkemesi kararlarının güncel arşivine erişim sağlar.
