/* ===== RoarAway — i18n (EN / DE) ===== */

const TRANSLATIONS = {

  en: {
    /* ── NAV ── */
    nav_home:        'Home',
    nav_cars:        'Cars',
    nav_locations:   'Locations',
    nav_deals:       'Deals',
    nav_about:       'About',
    nav_contact:     'Contact',
    nav_view_deals:  'View Deals',
    nav_book_now:    'Book Now',

    /* ── STATES TICKER ── */
    ticker_items: 'New York · California · Texas · Florida · Illinois · Nevada · Arizona · Georgia · Colorado · Washington · Massachusetts · Oregon · Hawaii · Michigan · North Carolina · Virginia · Tennessee · Minnesota',

    /* ── HERO ── */
    hero_tag:        '🇺🇸 Serving All 50 States',
    hero_h1:         'Rent a Car<br>EveryWhere in the <span>USA</span>',
    hero_sub:        '500+ locations nationwide. Transparent pricing. Free cancellation up to 48 hours before pickup.',
    hero_stat_loc:   'US Locations',
    hero_stat_cust:  'Happy Drivers',
    hero_stat_rat:   'Avg Rating',
    hero_stat_fee:   'Hidden Fees',

    /* ── SEARCH ── */
    search_tab_rent:    'Rent a Car',
    search_tab_oneway:  'One-Way Rental',
    search_tab_monthly: 'Monthly Rental',
    search_pickup_lbl:  'Pickup Location',
    search_pickup_date: 'Pickup Date & Time',
    search_return_date: 'Return Date & Time',
    search_btn:         'Search Cars →',

    /* ── TRUST BAR ── */
    trust_reviews:    '4.8 / 5 · 120,000+ Reviews',
    trust_fees:       'No Hidden Fees',
    trust_locations:  '500+ US Locations',
    trust_cancel:     'Free Cancellation',
    trust_roadside:   '24/7 Roadside Assist',

    /* ── FLEET ── */
    fleet_tag:       'Our Fleet',
    fleet_title:     'Cars for Every Journey',
    fleet_sub:       'All vehicles are late-model, fully insured, and road-ready. Pick up or delivered to your door.',
    fleet_view_all:  'View All Cars →',
    btn_reserve:     'Reserve',
    per_day:         '/day',

    /* ── FEATURES ── */
    feat_tag:        'Why RoarAway',
    feat_title:      'Built for American Road Trips',
    feat_sub:        'Trusted by millions of drivers every year for transparent pricing and reliable vehicles.',
    feat_insured_t:  'Fully Insured Fleet',
    feat_insured_d:  'Every vehicle comes with state-minimum liability coverage. Optional collision damage waivers available at checkout.',
    feat_price_t:    'Transparent Pricing',
    feat_price_d:    'The price you see is the price you pay. No surprise airport surcharges or mandatory add-ons.',
    feat_instant_t:  'Instant Confirmation',
    feat_instant_d:  'Book in under 2 minutes. Receive your rental voucher immediately by email and SMS.',
    feat_support_t:  '24/7 Roadside Support',
    feat_support_d:  'Around-the-clock phone, chat, and app support including roadside assistance in all 50 states.',
    feat_payment_t:  'Flexible Payment',
    feat_payment_d:  'Pay now for the best rate or reserve free and pay at pickup. All major credit and debit cards accepted.',
    feat_oneway_t:   'One-Way Rentals',
    feat_oneway_d:   'Pick up in one city, drop off in another. Perfect for cross-country drives with no backtracking.',

    /* ── HOW IT WORKS ── */
    steps_tag:       'How It Works',
    steps_title:     'Keys in Hand in 4 Easy Steps',
    steps_sub:       'From search to road — the whole process takes minutes.',
    step1_title:     'Search',
    step1_desc:      'Enter your pickup city, dates, and preferred car class to see live availability.',
    step2_title:     'Choose',
    step2_desc:      'Compare cars side by side with full specs, photos, and all-inclusive pricing.',
    step3_title:     'Book',
    step3_desc:      'Secure your reservation in seconds. No account required for guests.',
    step4_title:     'Drive',
    step4_desc:      'Show your voucher at the counter, grab the keys, and hit the open road.',

    /* ── REVIEWS ── */
    reviews_tag:     'Customer Reviews',
    reviews_title:   'Trusted by Real Drivers',
    reviews_sub:     '120,000+ verified reviews. Average rating 4.8 out of 5 stars.',

    /* ── LOCATIONS ── */
    locs_tag:        'Top Locations',
    locs_title:      'Available Nationwide',
    locs_sub:        'Pickup at major airports, downtown hubs, and train stations across all 50 states.',
    locs_view_all:   'See All 500+ Locations →',

    /* ── CTA BANNER ── */
    cta_title:       'Ready to Hit the Road?',
    cta_sub:         'Summer deals active — save up to 30% on weekly rentals nationwide.',
    cta_book:        'Book Your Car',
    cta_deals:       'View All Deals',

    /* ── CARS PAGE ── */
    cars_hero_title: 'Browse Our Fleet',
    cars_hero_sub:   'Late-model vehicles for every budget and road trip. All prices include unlimited mileage.',
    filter_all:      'All Cars',
    filter_economy:  'Economy',
    filter_compact:  'Compact',
    filter_suv:      'SUV',
    filter_luxury:   'Luxury',
    filter_electric: 'Electric',
    filter_truck:    'Truck',
    filter_van:      'Van',
    sort_recommended:'Sort: Recommended',
    sort_price_asc:  'Price: Low → High',
    sort_price_desc: 'Price: High → Low',
    sidebar_filter:  'Filter',
    sidebar_price:   'Daily Price',
    sidebar_seats:   'Seats',
    sidebar_trans:   'Transmission',
    sidebar_auto:    'Automatic',
    sidebar_manual:  'Manual',
    sidebar_feats:   'Features',
    sidebar_fuel:    'Fuel Type',
    sidebar_apply:   'Apply Filters',
    results_showing: 'Showing',
    results_vehicles:'vehicles available',

    /* ── LOCATIONS PAGE ── */
    locs_page_title: '500+ Locations Nationwide',
    locs_page_sub:   'Available at major airports, downtown hubs, train stations, and neighborhood branches across all 50 states.',
    locs_airport_tag:'Airport Rentals',
    locs_airport_t:  'Seamless Airport Pickup',
    locs_airport_s:  'At every major US airport, our counter is steps from baggage claim — no shuttle needed at most locations.',
    locs_quick_t:    'Quick Pickup',
    locs_quick_d:    'Pre-check online to bypass the queue. Your car will be ready at the counter with paperwork pre-filled.',
    locs_flight_t:   'Flight Tracking',
    locs_flight_d:   "We monitor your flight. Delayed landing? Your booking adjusts automatically — no fees, no calls needed.",
    locs_return_t:   'Return EveryWhere',
    locs_return_d:   'Drop off at any RoarAway airport or city location. One-way rentals available between all 500+ sites.',

    /* ── DEALS PAGE ── */
    deals_hero_title:'Current Deals & Promos',
    deals_hero_sub:  'Save up to 40% on rentals. Use a promo code at checkout or book a qualifying rate to unlock savings.',
    copy_btn:        'Copy',
    copy_toast:      'Code copied!',
    newsletter_tag:  'Stay Updated',
    newsletter_title:'Get Exclusive Deals by Email',
    newsletter_sub:  'Join 80,000+ travelers who get early access to flash sales and seasonal promos.',
    newsletter_placeholder: 'Enter your email address',
    newsletter_btn:  'Subscribe',
    newsletter_note: 'No spam. Unsubscribe any time. We respect your privacy.',
    newsletter_toast:'Subscribed! Check your inbox.',

    /* ── ABOUT PAGE ── */
    about_hero_tag:  'Founded in Austin, TX',
    about_cta_book:  'Book a Car',
    about_cta_contact:'Contact Us',
    about_story_tag: 'Our Story',
    about_story_title:'From One Car to 50 States',
    about_stats_loc: 'US Pickup Locations',
    about_stats_cust:'Happy Customers / Year',
    about_stats_rat: 'Average Review Score',
    about_stats_fee: 'Hidden Fees, Ever',
    about_vals_tag:  'Our Values',
    about_vals_title:'What We Stand For',
    about_vals_sub:  'Three principles that guide every decision we make as a company.',
    about_team_tag:  'Leadership Team',
    about_team_title:'The People Behind RoarAway',
    about_team_sub:  'A diverse team of operators, technologists, and road-trip enthusiasts.',
    about_press_tag: 'Press',
    about_press_title:'RoarAway in the News',
    about_press_sub: 'Awards, features, and coverage from leading US media outlets.',

    /* ── CONTACT PAGE ── */
    contact_hero_title:'We\'re Here to Help',
    contact_hero_sub:  'Questions, booking changes, roadside assistance, or just want to say hello — reach us any time.',
    contact_channels_tag:'Get in Touch',
    contact_channels_t:'Multiple Ways to Reach Us',
    contact_channels_s:'Pick the channel that works best for you. We\'re available around the clock.',
    contact_form_title:'Send Us a Message',
    contact_form_sub:  "We reply to all inquiries within 4 business hours.",
    contact_fname:   'First Name',
    contact_lname:   'Last Name',
    contact_email:   'Email Address',
    contact_phone:   'Phone Number',
    contact_booking: 'Booking Confirmation # (Optional)',
    contact_topic:   'Topic',
    contact_message: 'Message',
    contact_send:    'Send Message →',
    contact_privacy: 'By submitting this form you agree to our',
    contact_privacy_link:'Privacy Policy',
    contact_faq_tag: 'FAQ',
    contact_faq_title:'Frequently Asked Questions',
    contact_faq_sub: 'Quick answers to the most common questions about renting with RoarAway.',
    contact_manage:  "Need to Manage a Booking?",
    contact_manage_d:"Log in to your account or use your booking confirmation number to modify, cancel, or extend your reservation.",
    contact_manage_btn:'Manage My Booking',
    contact_cta_t:   'Still Have Questions?',
    contact_cta_s:   'Our team is available 24/7 by phone and chat — we\'re always happy to help.',
    contact_cta_btn: 'Call 1-800-RoarAway',

    /* ── FOOTER ── */
    footer_tagline:  "America's most transparent car rental service.<br>500+ locations. All 50 states.",
    footer_rent:     'Rent',
    footer_economy:  'Economy Cars',
    footer_suvs:     'SUVs & Crossovers',
    footer_luxury:   'Luxury Vehicles',
    footer_electric: 'Electric Cars',
    footer_trucks:   'Pickup Trucks',
    footer_vans:     'Vans & Minivans',
    footer_company:  'Company',
    footer_about:    'About Us',
    footer_careers:  'Careers',
    footer_press:    'Press',
    footer_partner:  'Partner Program',
    footer_corporate:'Corporate Rental',
    footer_support:  'Support',
    footer_help:     'Help Center',
    footer_booking:  'Manage Booking',
    footer_roadside: 'Roadside Assist',
    footer_access:   'Accessibility',
    footer_privacy:  'Privacy Policy',
    footer_terms:    'Terms of Use',
    footer_copy:     '© 2026 RoarAway, Inc. All rights reserved.',
    footer_legal:    'DOT Registered | BBB Accredited',

    /* ── CTA BANNER (pages) ── */
    cta_not_sure_t:  'Not Sure Which Car?',
    cta_not_sure_s:  'Our team can help you pick the right vehicle for your trip. Call or chat 24/7.',
    cta_talk:        'Talk to Us',
    cta_view_deals:  'View Current Deals',
    cta_pick_city_t: 'Pick Your City, Hit the Road',
    cta_pick_city_s: 'Search live availability at any of our 500+ US locations.',
    cta_find_cars:   'Find Cars Near Me',
    cta_contact_br:  'Contact a Branch',
    cta_save_t:      'Ready to Save?',
    cta_save_s:      'Browse available cars and apply your promo code at checkout.',
    cta_browse:      'Browse Cars',
    cta_join_t:      'Join the RoarAway Family',
    cta_join_s:      "We're hiring across the US. Check open roles or simply book your next rental today.",
    cta_careers:     'View Careers',
  },

  /* ════════════════════════════════════════
     GERMAN (Deutsch)
  ════════════════════════════════════════ */
  de: {
    /* ── NAV ── */
    nav_home:        'Startseite',
    nav_cars:        'Fahrzeuge',
    nav_locations:   'Standorte',
    nav_deals:       'Angebote',
    nav_about:       'Über uns',
    nav_contact:     'Kontakt',
    nav_view_deals:  'Angebote ansehen',
    nav_book_now:    'Jetzt buchen',

    ticker_items: 'New York · Kalifornien · Texas · Florida · Illinois · Nevada · Arizona · Georgia · Colorado · Washington · Massachusetts · Oregon · Hawaii · Michigan · North Carolina · Virginia · Tennessee · Minnesota',

    /* ── HERO ── */
    hero_tag:        '🇺🇸 In allen 50 Bundesstaaten verfügbar',
    hero_h1:         'Auto mieten<br>überall in den <span>USA</span>',
    hero_sub:        'Über 500 Standorte landesweit. Transparente Preise. Kostenlose Stornierung bis 48 Stunden vor Abholung.',
    hero_stat_loc:   'US-Standorte',
    hero_stat_cust:  'Zufriedene Fahrer',
    hero_stat_rat:   'Ø Bewertung',
    hero_stat_fee:   'Versteckte Gebühren',

    /* ── SEARCH ── */
    search_tab_rent:    'Auto mieten',
    search_tab_oneway:  'Einwegmiete',
    search_tab_monthly: 'Monatsmiete',
    search_pickup_lbl:  'Abholort',
    search_pickup_date: 'Abholdatum & Uhrzeit',
    search_return_date: 'Rückgabedatum & Uhrzeit',
    search_btn:         'Fahrzeuge suchen →',

    /* ── TRUST BAR ── */
    trust_reviews:    '4,8 / 5 · über 120.000 Bewertungen',
    trust_fees:       'Keine versteckten Gebühren',
    trust_locations:  '500+ US-Standorte',
    trust_cancel:     'Kostenlose Stornierung',
    trust_roadside:   '24/7 Pannenhilfe',

    /* ── FLEET ── */
    fleet_tag:       'Unsere Fahrzeugflotte',
    fleet_title:     'Fahrzeuge für jede Reise',
    fleet_sub:       'Alle Fahrzeuge sind neuere Modelle, vollversichert und fahrbereit. Abholung oder Lieferung zu Ihrer Tür.',
    fleet_view_all:  'Alle Fahrzeuge anzeigen →',
    btn_reserve:     'Reservieren',
    per_day:         '/Tag',

    /* ── FEATURES ── */
    feat_tag:        'Warum RoarAway',
    feat_title:      'Für amerikanische Roadtrips gemacht',
    feat_sub:        'Jedes Jahr von Millionen Fahrern für transparente Preise und zuverlässige Fahrzeuge vertraut.',
    feat_insured_t:  'Vollversicherte Flotte',
    feat_insured_d:  'Jedes Fahrzeug kommt mit gesetzlicher Mindesthaftpflicht. Optionale Kollisionsschadenfreistellung an der Kasse erhältlich.',
    feat_price_t:    'Transparente Preise',
    feat_price_d:    'Was Sie sehen, zahlen Sie auch. Keine überraschenden Flughafenzuschläge oder Pflichtoptionen.',
    feat_instant_t:  'Sofortige Bestätigung',
    feat_instant_d:  'In unter 2 Minuten buchen. Mietgutschein sofort per E-Mail und SMS erhalten.',
    feat_support_t:  '24/7 Pannenhilfe',
    feat_support_d:  'Rund-um-die-Uhr Telefon-, Chat- und App-Support einschließlich Pannenhilfe in allen 50 Bundesstaaten.',
    feat_payment_t:  'Flexible Zahlung',
    feat_payment_d:  'Jetzt für den besten Preis zahlen oder kostenlos reservieren und bei Abholung zahlen. Alle gängigen Kredit- und Debitkarten akzeptiert.',
    feat_oneway_t:   'Einwegmieten',
    feat_oneway_d:   'In einer Stadt abholen, in einer anderen zurückgeben. Ideal für Quer-durch-die-USA-Fahrten.',

    /* ── HOW IT WORKS ── */
    steps_tag:       'So funktioniert es',
    steps_title:     'Schlüssel in der Hand in 4 einfachen Schritten',
    steps_sub:       'Von der Suche bis zur Straße — der gesamte Vorgang dauert nur Minuten.',
    step1_title:     'Suchen',
    step1_desc:      'Abholort, Datum und gewünschte Fahrzeugklasse eingeben, um Live-Verfügbarkeit zu sehen.',
    step2_title:     'Auswählen',
    step2_desc:      'Fahrzeuge nebeneinander mit vollständigen Spezifikationen, Fotos und Inklusivpreisen vergleichen.',
    step3_title:     'Buchen',
    step3_desc:      'Reservierung in Sekunden sichern. Kein Konto für Gäste erforderlich.',
    step4_title:     'Fahren',
    step4_desc:      'Gutschein am Schalter vorzeigen, Schlüssel holen und los geht\'s.',

    /* ── REVIEWS ── */
    reviews_tag:     'Kundenbewertungen',
    reviews_title:   'Von echten Fahrern vertraut',
    reviews_sub:     'Über 120.000 verifizierte Bewertungen. Durchschnittliche Bewertung 4,8 von 5 Sternen.',

    /* ── LOCATIONS ── */
    locs_tag:        'Top-Standorte',
    locs_title:      'Landesweit verfügbar',
    locs_sub:        'Abholung an großen Flughäfen, innerstädtischen Zentren und Bahnhöfen in allen 50 Bundesstaaten.',
    locs_view_all:   'Alle 500+ Standorte anzeigen →',

    /* ── CTA BANNER ── */
    cta_title:       'Bereit für die Straße?',
    cta_sub:         'Sommerangebote aktiv — sparen Sie bis zu 30% auf Wochenmietpreise landesweit.',
    cta_book:        'Fahrzeug buchen',
    cta_deals:       'Alle Angebote ansehen',

    /* ── CARS PAGE ── */
    cars_hero_title: 'Unsere Fahrzeugflotte',
    cars_hero_sub:   'Neuere Fahrzeuge für jedes Budget und jeden Roadtrip. Alle Preise inklusive unbegrenzter Kilometerleistung.',
    filter_all:      'Alle Fahrzeuge',
    filter_economy:  'Economy',
    filter_compact:  'Kompakt',
    filter_suv:      'SUV',
    filter_luxury:   'Luxus',
    filter_electric: 'Elektro',
    filter_truck:    'Pickup',
    filter_van:      'Van',
    sort_recommended:'Sortierung: Empfohlen',
    sort_price_asc:  'Preis: Günstigste zuerst',
    sort_price_desc: 'Preis: Teuerste zuerst',
    sidebar_filter:  'Filter',
    sidebar_price:   'Tagespreis',
    sidebar_seats:   'Sitzplätze',
    sidebar_trans:   'Getriebe',
    sidebar_auto:    'Automatik',
    sidebar_manual:  'Schaltgetriebe',
    sidebar_feats:   'Ausstattung',
    sidebar_fuel:    'Kraftstoffart',
    sidebar_apply:   'Filter anwenden',
    results_showing: 'Es werden',
    results_vehicles:'verfügbare Fahrzeuge angezeigt',

    /* ── LOCATIONS PAGE ── */
    locs_page_title: 'Über 500 Standorte landesweit',
    locs_page_sub:   'An großen Flughäfen, innerstädtischen Zentren, Bahnhöfen und Filialen in allen 50 Bundesstaaten verfügbar.',
    locs_airport_tag:'Flughafenmieten',
    locs_airport_t:  'Nahtlose Flughafenabholung',
    locs_airport_s:  'An jedem großen US-Flughafen befindet sich unser Schalter nur wenige Schritte vom Gepäckband — an den meisten Standorten kein Shuttle erforderlich.',
    locs_quick_t:    'Schnelle Abholung',
    locs_quick_d:    'Online vorab einchecken, um die Warteschlange zu umgehen. Ihr Fahrzeug wartet am Schalter mit vorausgefüllten Unterlagen.',
    locs_flight_t:   'Flugnachverfolgung',
    locs_flight_d:   'Wir überwachen Ihren Flug. Verspätete Landung? Ihre Buchung passt sich automatisch an — keine Gebühren, keine Anrufe nötig.',
    locs_return_t:   'Überall zurückgeben',
    locs_return_d:   'An jedem RoarAway-Flughafen oder Stadtstandort zurückgeben. Einwegmieten zwischen allen 500+ Standorten verfügbar.',

    /* ── DEALS PAGE ── */
    deals_hero_title:'Aktuelle Angebote & Aktionen',
    deals_hero_sub:  'Sparen Sie bis zu 40% auf Mietpreise. Verwenden Sie einen Promo-Code an der Kasse oder buchen Sie einen qualifizierten Tarif.',
    copy_btn:        'Kopieren',
    copy_toast:      'Code kopiert!',
    newsletter_tag:  'Immer informiert',
    newsletter_title:'Exklusive Angebote per E-Mail erhalten',
    newsletter_sub:  'Schließen Sie sich über 80.000 Reisenden an, die frühzeitigen Zugang zu Flash-Sales und Saisonangeboten erhalten.',
    newsletter_placeholder: 'E-Mail-Adresse eingeben',
    newsletter_btn:  'Abonnieren',
    newsletter_note: 'Kein Spam. Jederzeit abmelden. Wir respektieren Ihre Privatsphäre.',
    newsletter_toast:'Abonniert! Prüfen Sie Ihren Posteingang.',

    /* ── ABOUT PAGE ── */
    about_hero_tag:  'Gegründet in Austin, TX',
    about_cta_book:  'Auto buchen',
    about_cta_contact:'Kontakt aufnehmen',
    about_story_tag: 'Unsere Geschichte',
    about_story_title:'Von einem Auto zu 50 Bundesstaaten',
    about_stats_loc: 'US-Abholstandorte',
    about_stats_cust:'Zufriedene Kunden / Jahr',
    about_stats_rat: 'Durchschnittliche Bewertung',
    about_stats_fee: 'Versteckte Gebühren, nie',
    about_vals_tag:  'Unsere Werte',
    about_vals_title:'Wofür wir stehen',
    about_vals_sub:  'Drei Grundsätze, die jede Entscheidung in unserem Unternehmen leiten.',
    about_team_tag:  'Führungsteam',
    about_team_title:'Die Menschen hinter RoarAway',
    about_team_sub:  'Ein vielfältiges Team aus Betreibern, Technologen und Roadtrip-Enthusiasten.',
    about_press_tag: 'Presse',
    about_press_title:'RoarAway in den Medien',
    about_press_sub: 'Auszeichnungen, Features und Berichte von führenden US-Medien.',

    /* ── CONTACT PAGE ── */
    contact_hero_title:'Wir sind für Sie da',
    contact_hero_sub:  'Fragen, Buchungsänderungen, Pannenhilfe oder einfach Hallo sagen — kontaktieren Sie uns jederzeit.',
    contact_channels_tag:'Kontakt aufnehmen',
    contact_channels_t:'Mehrere Wege, uns zu erreichen',
    contact_channels_s:'Wählen Sie den Kanal, der für Sie am besten passt. Wir sind rund um die Uhr erreichbar.',
    contact_form_title:'Nachricht senden',
    contact_form_sub:  'Wir antworten auf alle Anfragen innerhalb von 4 Geschäftsstunden.',
    contact_fname:   'Vorname',
    contact_lname:   'Nachname',
    contact_email:   'E-Mail-Adresse',
    contact_phone:   'Telefonnummer',
    contact_booking: 'Buchungsbestätigungsnr. (optional)',
    contact_topic:   'Thema',
    contact_message: 'Nachricht',
    contact_send:    'Nachricht senden →',
    contact_privacy: 'Mit dem Absenden dieses Formulars stimmen Sie unserer',
    contact_privacy_link:'Datenschutzrichtlinie',
    contact_faq_tag: 'Häufige Fragen',
    contact_faq_title:'Häufig gestellte Fragen',
    contact_faq_sub: 'Schnelle Antworten auf die häufigsten Fragen zur Anmietung bei RoarAway.',
    contact_manage:  'Buchung verwalten?',
    contact_manage_d:'Melden Sie sich in Ihrem Konto an oder verwenden Sie Ihre Buchungsbestätigungsnummer, um Ihre Reservierung zu ändern, zu stornieren oder zu verlängern.',
    contact_manage_btn:'Meine Buchung verwalten',
    contact_cta_t:   'Noch Fragen?',
    contact_cta_s:   'Unser Team ist 24/7 per Telefon und Chat erreichbar — wir helfen Ihnen jederzeit gerne.',
    contact_cta_btn: '1-800-RoarAway anrufen',

    /* ── FOOTER ── */
    footer_tagline:  "Amerikas transparentester Autoverleih.<br>500+ Standorte. Alle 50 Bundesstaaten.",
    footer_rent:     'Mieten',
    footer_economy:  'Economy-Fahrzeuge',
    footer_suvs:     'SUVs & Crossover',
    footer_luxury:   'Luxusfahrzeuge',
    footer_electric: 'Elektrofahrzeuge',
    footer_trucks:   'Pickup-Trucks',
    footer_vans:     'Vans & Minivans',
    footer_company:  'Unternehmen',
    footer_about:    'Über uns',
    footer_careers:  'Karriere',
    footer_press:    'Presse',
    footer_partner:  'Partnerprogramm',
    footer_corporate:'Firmenwagen',
    footer_support:  'Support',
    footer_help:     'Hilfezentrum',
    footer_booking:  'Buchung verwalten',
    footer_roadside: 'Pannenhilfe',
    footer_access:   'Barrierefreiheit',
    footer_privacy:  'Datenschutz',
    footer_terms:    'Nutzungsbedingungen',
    footer_copy:     '© 2025 RoarAway, Inc. Alle Rechte vorbehalten.',
    footer_legal:    'DOT-registriert | BBB-akkreditiert',

    /* ── CTA BANNER (pages) ── */
    cta_not_sure_t:  'Nicht sicher, welches Auto?',
    cta_not_sure_s:  'Unser Team hilft Ihnen, das richtige Fahrzeug für Ihre Reise zu finden. Anrufen oder chatten 24/7.',
    cta_talk:        'Mit uns sprechen',
    cta_view_deals:  'Aktuelle Angebote anzeigen',
    cta_pick_city_t: 'Stadt auswählen, losfahren',
    cta_pick_city_s: 'Live-Verfügbarkeit an über 500 US-Standorten suchen.',
    cta_find_cars:   'Fahrzeuge in meiner Nähe finden',
    cta_contact_br:  'Filiale kontaktieren',
    cta_save_t:      'Bereit zum Sparen?',
    cta_save_s:      'Verfügbare Fahrzeuge durchsuchen und Promo-Code an der Kasse eingeben.',
    cta_browse:      'Fahrzeuge durchsuchen',
    cta_join_t:      'Teil der RoarAway-Familie werden',
    cta_join_s:      'Wir stellen in den gesamten USA ein. Stellenangebote ansehen oder einfach Ihr nächstes Fahrzeug buchen.',
    cta_careers:     'Karriere ansehen',
  },

  /* ══════════════════════════════════════════════
     SPANISH (Español)
  ══════════════════════════════════════════════ */
  es: {
    nav_home:'Inicio',nav_cars:'Vehículos',nav_locations:'Ubicaciones',nav_deals:'Ofertas',nav_about:'Nosotros',nav_contact:'Contacto',nav_view_deals:'Ver ofertas',nav_book_now:'Reservar ahora',
    ticker_items:'Nueva York · California · Texas · Florida · Illinois · Nevada · Arizona · Georgia · Colorado · Washington · Massachusetts · Oregón · Hawái · Michigan · Carolina del Norte · Virginia · Tennessee · Minnesota',
    hero_tag:'🇺🇸 Disponible en los 50 estados',hero_h1:'Alquila un auto<br>en cualquier lugar de los <span>EE. UU.</span>',
    hero_sub:'Más de 500 ubicaciones en todo el país. Precios transparentes. Cancelación gratuita hasta 48 horas antes de la recogida.',
    hero_stat_loc:'Ubicaciones EE. UU.',hero_stat_cust:'Conductores felices',hero_stat_rat:'Calificación media',hero_stat_fee:'Cargos ocultos',
    search_tab_rent:'Alquilar un auto',search_tab_oneway:'Alquiler de ida',search_tab_monthly:'Alquiler mensual',
    search_pickup_lbl:'Lugar de recogida',search_pickup_date:'Fecha y hora de recogida',search_return_date:'Fecha y hora de devolución',search_btn:'Buscar autos →',
    trust_reviews:'4,8 / 5 · Más de 120.000 reseñas',trust_fees:'Sin cargos ocultos',trust_locations:'Más de 500 ubicaciones en EE. UU.',trust_cancel:'Cancelación gratuita',trust_roadside:'Asistencia en carretera 24/7',
    fleet_tag:'Nuestra flota',fleet_title:'Autos para cada viaje',fleet_sub:'Todos los vehículos son modelos recientes, totalmente asegurados y listos para la carretera.',fleet_view_all:'Ver todos los autos →',btn_reserve:'Reservar',per_day:'/día',
    feat_tag:'Por qué RoarAway',feat_title:'Diseñado para los viajes por carretera en EE. UU.',feat_sub:'Millones de conductores confían en nosotros cada año por precios transparentes y vehículos confiables.',
    feat_insured_t:'Flota totalmente asegurada',feat_insured_d:'Cada vehículo incluye cobertura mínima de responsabilidad civil. Exenciones opcionales de daños por colisión disponibles al pagar.',
    feat_price_t:'Precios transparentes',feat_price_d:'El precio que ves es el precio que pagas. Sin recargos sorpresa en aeropuertos ni complementos obligatorios.',
    feat_instant_t:'Confirmación instantánea',feat_instant_d:'Reserva en menos de 2 minutos. Recibe tu voucher de alquiler inmediatamente por correo y SMS.',
    feat_support_t:'Asistencia en carretera 24/7',feat_support_d:'Soporte telefónico, por chat y app las 24 horas, incluida asistencia en carretera en los 50 estados.',
    feat_payment_t:'Pago flexible',feat_payment_d:'Paga ahora para obtener la mejor tarifa o reserva gratis y paga al recoger. Se aceptan todas las tarjetas principales.',
    feat_oneway_t:'Alquileres de ida',feat_oneway_d:'Recoge en una ciudad y devuelve en otra. Ideal para viajes de costa a costa.',
    steps_tag:'Cómo funciona',steps_title:'Llaves en mano en 4 sencillos pasos',steps_sub:'De la búsqueda a la carretera, todo el proceso lleva minutos.',
    step1_title:'Buscar',step1_desc:'Ingresa la ciudad de recogida, fechas y clase de vehículo preferida para ver disponibilidad en tiempo real.',
    step2_title:'Elegir',step2_desc:'Compara autos con especificaciones completas, fotos y precios todo incluido.',
    step3_title:'Reservar',step3_desc:'Asegura tu reserva en segundos. No se requiere cuenta para invitados.',
    step4_title:'Conducir',step4_desc:'Muestra tu voucher en el mostrador, toma las llaves y sal a la carretera.',
    reviews_tag:'Reseñas de clientes',reviews_title:'Confiado por conductores reales',reviews_sub:'Más de 120.000 reseñas verificadas. Calificación promedio de 4,8 de 5 estrellas.',
    locs_tag:'Principales ubicaciones',locs_title:'Disponible en todo el país',locs_sub:'Recogida en los principales aeropuertos, centros urbanos y estaciones de tren en los 50 estados.',locs_view_all:'Ver más de 500 ubicaciones →',
    cta_title:'¿Listo para la aventura?',cta_sub:'Ofertas de verano activas — ahorra hasta un 30% en alquileres semanales en todo el país.',cta_book:'Reservar tu auto',cta_deals:'Ver todas las ofertas',
    cars_hero_title:'Nuestra flota de vehículos',cars_hero_sub:'Vehículos recientes para cada presupuesto y viaje. Todos los precios incluyen kilometraje ilimitado.',
    filter_all:'Todos los autos',filter_economy:'Económico',filter_compact:'Compacto',filter_suv:'SUV',filter_luxury:'Lujo',filter_electric:'Eléctrico',filter_truck:'Camioneta',filter_van:'Van',
    sort_recommended:'Ordenar: Recomendado',sort_price_asc:'Precio: Menor a mayor',sort_price_desc:'Precio: Mayor a menor',
    sidebar_filter:'Filtrar',sidebar_price:'Precio diario',sidebar_seats:'Asientos',sidebar_trans:'Transmisión',sidebar_auto:'Automático',sidebar_manual:'Manual',sidebar_feats:'Características',sidebar_fuel:'Tipo de combustible',sidebar_apply:'Aplicar filtros',
    results_showing:'Mostrando',results_vehicles:'vehículos disponibles',
    locs_page_title:'Más de 500 ubicaciones en todo el país',locs_page_sub:'Disponible en aeropuertos principales, centros urbanos y sucursales en los 50 estados.',
    locs_airport_tag:'Alquileres en aeropuerto',locs_airport_t:'Recogida sin complicaciones en el aeropuerto',locs_airport_s:'En cada aeropuerto principal de EE. UU., nuestro mostrador está a pasos del reclamo de equipaje.',
    locs_quick_t:'Recogida rápida',locs_quick_d:'Registra en línea para saltarte la fila. Tu auto estará listo con los papeles prellenados.',
    locs_flight_t:'Seguimiento de vuelo',locs_flight_d:'Monitoreamos tu vuelo. ¿Aterrizaje retrasado? Tu reserva se ajusta automáticamente.',
    locs_return_t:'Devuelve en cualquier lugar',locs_return_d:'Devuelve en cualquier ubicación de RoarAway. Alquileres de ida disponibles entre más de 500 sucursales.',
    deals_hero_title:'Ofertas y promociones actuales',deals_hero_sub:'Ahorra hasta un 40% en alquileres. Usa un código promocional al pagar.',
    copy_btn:'Copiar',copy_toast:'¡Código copiado!',newsletter_tag:'Mantente informado',newsletter_title:'Recibe ofertas exclusivas por correo',newsletter_sub:'Únete a más de 80.000 viajeros que reciben acceso anticipado a ventas flash.',newsletter_placeholder:'Introduce tu correo electrónico',newsletter_btn:'Suscribirse',newsletter_note:'Sin spam. Cancela en cualquier momento.',newsletter_toast:'¡Suscrito! Revisa tu bandeja de entrada.',
    about_hero_tag:'Fundada en Austin, TX',about_cta_book:'Reservar un auto',about_cta_contact:'Contáctanos',about_story_tag:'Nuestra historia',about_story_title:'De un auto a los 50 estados',
    about_stats_loc:'Ubicaciones de recogida en EE. UU.',about_stats_cust:'Clientes satisfechos / año',about_stats_rat:'Puntuación media de reseñas',about_stats_fee:'Cargos ocultos, nunca',
    about_vals_tag:'Nuestros valores',about_vals_title:'Lo que defendemos',about_vals_sub:'Tres principios que guían cada decisión que tomamos.',
    about_team_tag:'Equipo directivo',about_team_title:'Las personas detrás de RoarAway',about_team_sub:'Un equipo diverso de operadores, tecnólogos y entusiastas de los viajes.',
    about_press_tag:'Prensa',about_press_title:'RoarAway en las noticias',about_press_sub:'Premios, artículos y cobertura de los principales medios de EE. UU.',
    contact_hero_title:'Estamos aquí para ayudarte',contact_hero_sub:'Preguntas, cambios de reserva, asistencia en carretera — contáctanos en cualquier momento.',
    contact_channels_tag:'Contáctanos',contact_channels_t:'Múltiples formas de comunicarte',contact_channels_s:'Elige el canal que mejor te convenga. Estamos disponibles las 24 horas.',
    contact_form_title:'Envíanos un mensaje',contact_form_sub:'Respondemos todas las consultas en 4 horas hábiles.',
    contact_fname:'Nombre',contact_lname:'Apellido',contact_email:'Correo electrónico',contact_phone:'Número de teléfono',contact_booking:'Nº de confirmación de reserva (opcional)',contact_topic:'Asunto',contact_message:'Mensaje',contact_send:'Enviar mensaje →',
    contact_privacy:'Al enviar este formulario aceptas nuestra',contact_privacy_link:'Política de privacidad',
    contact_faq_tag:'Preguntas frecuentes',contact_faq_title:'Preguntas frecuentes',contact_faq_sub:'Respuestas rápidas a las preguntas más comunes sobre alquilar con RoarAway.',
    contact_manage:'¿Necesitas gestionar una reserva?',contact_manage_d:'Inicia sesión en tu cuenta o usa tu número de confirmación para modificar, cancelar o ampliar tu reserva.',contact_manage_btn:'Gestionar mi reserva',
    contact_cta_t:'¿Todavía tienes preguntas?',contact_cta_s:'Nuestro equipo está disponible 24/7 por teléfono y chat.',contact_cta_btn:'Llamar al 1-800-RoarAway',
    footer_tagline:"El alquiler de autos más transparente de América.<br>500+ ubicaciones. Los 50 estados.",
    footer_rent:'Alquilar',footer_economy:'Autos económicos',footer_suvs:'SUVs y crossovers',footer_luxury:'Vehículos de lujo',footer_electric:'Autos eléctricos',footer_trucks:'Camionetas pickup',footer_vans:'Furgonetas y minivans',
    footer_company:'Empresa',footer_about:'Sobre nosotros',footer_careers:'Empleo',footer_press:'Prensa',footer_partner:'Programa de socios',footer_corporate:'Alquiler corporativo',
    footer_support:'Soporte',footer_help:'Centro de ayuda',footer_booking:'Gestionar reserva',footer_roadside:'Asistencia en carretera',footer_access:'Accesibilidad',footer_privacy:'Política de privacidad',footer_terms:'Términos de uso',
    footer_copy:'© 2025 RoarAway, Inc. Todos los derechos reservados.',footer_legal:'Registrado en DOT | Acreditado por BBB',
    cta_not_sure_t:'¿No estás seguro de qué auto elegir?',cta_not_sure_s:'Nuestro equipo puede ayudarte a elegir el vehículo adecuado. Llama o chatea 24/7.',
    cta_talk:'Hablar con nosotros',cta_view_deals:'Ver ofertas actuales',cta_pick_city_t:'Elige tu ciudad y sal a la carretera',cta_pick_city_s:'Busca disponibilidad en más de 500 ubicaciones en EE. UU.',
    cta_find_cars:'Buscar autos cerca de mí',cta_contact_br:'Contactar una sucursal',cta_save_t:'¿Listo para ahorrar?',cta_save_s:'Explora los autos disponibles y aplica tu código promocional al pagar.',
    cta_browse:'Explorar autos',cta_join_t:'Únete a la familia RoarAway',cta_join_s:'Contratamos en todo EE. UU. Consulta puestos vacantes o simplemente reserva tu próximo auto.',cta_careers:'Ver empleos',
  },

  /* ══════════════════════════════════════════════
     FRENCH (Français)
  ══════════════════════════════════════════════ */
  fr: {
    nav_home:'Accueil',nav_cars:'Véhicules',nav_locations:'Agences',nav_deals:'Offres',nav_about:'À propos',nav_contact:'Contact',nav_view_deals:'Voir les offres',nav_book_now:'Réserver maintenant',
    ticker_items:'New York · Californie · Texas · Floride · Illinois · Nevada · Arizona · Géorgie · Colorado · Washington · Massachusetts · Orégon · Hawaï · Michigan · Caroline du Nord · Virginie · Tennessee · Minnesota',
    hero_tag:'🇺🇸 Disponible dans les 50 États',hero_h1:'Louez une voiture<br>partout aux <span>États-Unis</span>',
    hero_sub:"Plus de 500 agences à travers le pays. Prix transparents. Annulation gratuite jusqu'à 48 heures avant la prise en charge.",
    hero_stat_loc:'Agences aux États-Unis',hero_stat_cust:'Conducteurs satisfaits',hero_stat_rat:'Note moyenne',hero_stat_fee:'Frais cachés',
    search_tab_rent:'Louer une voiture',search_tab_oneway:'Location aller simple',search_tab_monthly:'Location mensuelle',
    search_pickup_lbl:'Lieu de prise en charge',search_pickup_date:'Date et heure de prise en charge',search_return_date:'Date et heure de restitution',search_btn:'Rechercher des voitures →',
    trust_reviews:'4,8 / 5 · Plus de 120 000 avis',trust_fees:'Pas de frais cachés',trust_locations:'Plus de 500 agences aux États-Unis',trust_cancel:'Annulation gratuite',trust_roadside:'Assistance routière 24h/24',
    fleet_tag:'Notre flotte',fleet_title:'Des voitures pour chaque voyage',fleet_sub:'Tous les véhicules sont récents, entièrement assurés et prêts à partir.',fleet_view_all:'Voir toutes les voitures →',btn_reserve:'Réserver',per_day:'/jour',
    feat_tag:'Pourquoi RoarAway',feat_title:'Conçu pour les road trips américains',feat_sub:'Des millions de conducteurs nous font confiance chaque année pour des prix transparents et des véhicules fiables.',
    feat_insured_t:'Flotte entièrement assurée',feat_insured_d:"Chaque véhicule est couvert par la responsabilité civile minimale légale. Options de protection contre les dommages disponibles.",
    feat_price_t:'Prix transparents',feat_price_d:"Le prix affiché est le prix payé. Pas de surcharges aéroportuaires surprises ni d'options obligatoires.",
    feat_instant_t:'Confirmation instantanée',feat_instant_d:'Réservez en moins de 2 minutes. Recevez votre bon de location immédiatement par e-mail et SMS.',
    feat_support_t:'Assistance routière 24h/24',feat_support_d:"Support téléphonique, chat et appli 24h/24, y compris l'assistance routière dans les 50 États.",
    feat_payment_t:'Paiement flexible',feat_payment_d:'Payez maintenant pour le meilleur tarif ou réservez gratuitement et payez à la prise en charge.',
    feat_oneway_t:'Locations aller simple',feat_oneway_d:"Prenez en charge dans une ville, restituez dans une autre. Idéal pour les voyages d'un bout à l'autre des États-Unis.",
    steps_tag:'Comment ça marche',steps_title:'Les clés en main en 4 étapes simples',steps_sub:'De la recherche à la route, tout le processus prend quelques minutes.',
    step1_title:'Rechercher',step1_desc:'Entrez votre ville de départ, vos dates et votre catégorie de véhicule pour voir les disponibilités en temps réel.',
    step2_title:'Choisir',step2_desc:'Comparez les voitures avec les caractéristiques complètes, les photos et les prix tout compris.',
    step3_title:'Réserver',step3_desc:'Sécurisez votre réservation en quelques secondes. Aucun compte requis pour les invités.',
    step4_title:'Conduire',step4_desc:'Présentez votre bon au comptoir, récupérez les clés et prenez la route.',
    reviews_tag:'Avis clients',reviews_title:'La confiance des vrais conducteurs',reviews_sub:'Plus de 120 000 avis vérifiés. Note moyenne de 4,8 sur 5 étoiles.',
    locs_tag:'Principales agences',locs_title:'Disponible partout aux États-Unis',locs_sub:'Prise en charge dans les grands aéroports, centres-villes et gares dans les 50 États.',locs_view_all:'Voir toutes les 500+ agences →',
    cta_title:'Prêt pour la route ?',cta_sub:"Offres estivales actives — économisez jusqu'à 30 % sur les locations à la semaine.",cta_book:'Réserver ma voiture',cta_deals:'Voir toutes les offres',
    cars_hero_title:'Notre flotte de véhicules',cars_hero_sub:'Des véhicules récents pour tous les budgets et tous les voyages. Tous les prix incluent le kilométrage illimité.',
    filter_all:'Toutes les voitures',filter_economy:'Économique',filter_compact:'Compacte',filter_suv:'SUV',filter_luxury:'Luxe',filter_electric:'Électrique',filter_truck:'Pick-up',filter_van:'Van',
    sort_recommended:'Tri : Recommandé',sort_price_asc:'Prix : Croissant',sort_price_desc:'Prix : Décroissant',
    sidebar_filter:'Filtres',sidebar_price:'Prix journalier',sidebar_seats:'Places',sidebar_trans:'Transmission',sidebar_auto:'Automatique',sidebar_manual:'Manuelle',sidebar_feats:'Équipements',sidebar_fuel:'Type de carburant',sidebar_apply:'Appliquer les filtres',
    results_showing:'Affichage de',results_vehicles:'véhicules disponibles',
    locs_page_title:'Plus de 500 agences à travers les États-Unis',locs_page_sub:'Disponible dans les grands aéroports, centres-villes et succursales dans les 50 États.',
    locs_airport_tag:'Locations en aéroport',locs_airport_t:'Prise en charge en aéroport sans tracas',locs_airport_s:'Dans chaque grand aéroport américain, notre comptoir est à quelques pas du tapis à bagages.',
    locs_quick_t:'Prise en charge rapide',locs_quick_d:"Effectuez l'enregistrement en ligne pour éviter la file. Votre voiture sera prête au comptoir.",
    locs_flight_t:'Suivi de vol',locs_flight_d:'Nous surveillons votre vol. Atterrissage retardé ? Votre réservation s\'adapte automatiquement.',
    locs_return_t:'Restitution partout',locs_return_d:"Restituez dans n'importe quelle agence RoarAway. Locations aller simple disponibles entre plus de 500 sites.",
    deals_hero_title:'Offres et promotions actuelles',deals_hero_sub:"Économisez jusqu'à 40 % sur les locations. Utilisez un code promo à la caisse.",
    copy_btn:'Copier',copy_toast:'Code copié !',newsletter_tag:'Restez informé',newsletter_title:'Recevez des offres exclusives par e-mail',newsletter_sub:"Rejoignez plus de 80 000 voyageurs qui profitent d'un accès anticipé aux ventes flash.",newsletter_placeholder:'Saisissez votre adresse e-mail',newsletter_btn:"S'abonner",newsletter_note:'Pas de spam. Désabonnement à tout moment.',newsletter_toast:'Abonné ! Vérifiez votre boîte de réception.',
    about_hero_tag:'Fondée à Austin, TX',about_cta_book:'Réserver une voiture',about_cta_contact:'Nous contacter',about_story_tag:'Notre histoire',about_story_title:"D'une voiture à 50 États",
    about_stats_loc:'Points de collecte aux États-Unis',about_stats_cust:'Clients satisfaits / an',about_stats_rat:'Note moyenne',about_stats_fee:'Frais cachés, jamais',
    about_vals_tag:'Nos valeurs',about_vals_title:'Ce pour quoi nous nous battons',about_vals_sub:'Trois principes qui guident chaque décision que nous prenons.',
    about_team_tag:'Équipe dirigeante',about_team_title:'Les personnes derrière RoarAway',about_team_sub:"Une équipe diversifiée d'opérateurs, de technologues et d'amateurs de road trips.",
    about_press_tag:'Presse',about_press_title:"RoarAway dans l'actualité",about_press_sub:'Prix, reportages et couverture des principaux médias américains.',
    contact_hero_title:'Nous sommes là pour vous aider',contact_hero_sub:'Questions, modifications de réservation, assistance routière — contactez-nous à tout moment.',
    contact_channels_tag:'Nous contacter',contact_channels_t:'Plusieurs façons de nous joindre',contact_channels_s:'Choisissez le canal qui vous convient le mieux. Nous sommes disponibles 24h/24.',
    contact_form_title:'Envoyez-nous un message',contact_form_sub:'Nous répondons à toutes les demandes dans les 4 heures ouvrables.',
    contact_fname:'Prénom',contact_lname:'Nom',contact_email:'Adresse e-mail',contact_phone:'Numéro de téléphone',contact_booking:'N° de confirmation de réservation (facultatif)',contact_topic:'Sujet',contact_message:'Message',contact_send:'Envoyer le message →',
    contact_privacy:'En soumettant ce formulaire, vous acceptez notre',contact_privacy_link:'Politique de confidentialité',
    contact_faq_tag:'FAQ',contact_faq_title:'Questions fréquemment posées',contact_faq_sub:'Réponses rapides aux questions les plus courantes sur la location avec RoarAway.',
    contact_manage:'Besoin de gérer une réservation ?',contact_manage_d:'Connectez-vous à votre compte ou utilisez votre numéro de confirmation pour modifier, annuler ou prolonger votre réservation.',contact_manage_btn:'Gérer ma réservation',
    contact_cta_t:'Des questions supplémentaires ?',contact_cta_s:"Notre équipe est disponible 24h/24 par téléphone et chat — nous sommes toujours ravis d'aider.",contact_cta_btn:'Appeler le 1-800-RoarAway',
    footer_tagline:"La location de voiture la plus transparente d'Amérique.<br>500+ agences. Les 50 États.",
    footer_rent:'Louer',footer_economy:'Voitures économiques',footer_suvs:'SUV & crossovers',footer_luxury:'Voitures de luxe',footer_electric:'Voitures électriques',footer_trucks:'Pick-ups',footer_vans:'Vans & monospaces',
    footer_company:'Entreprise',footer_about:'À propos',footer_careers:'Carrières',footer_press:'Presse',footer_partner:'Programme partenaire',footer_corporate:"Location d'entreprise",
    footer_support:'Assistance',footer_help:"Centre d'aide",footer_booking:'Gérer ma réservation',footer_roadside:'Assistance routière',footer_access:'Accessibilité',footer_privacy:'Politique de confidentialité',footer_terms:"Conditions d'utilisation",
    footer_copy:'© 2025 RoarAway, Inc. Tous droits réservés.',footer_legal:'Enregistré DOT | Accrédité BBB',
    cta_not_sure_t:'Pas sûr de quel véhicule choisir ?',cta_not_sure_s:'Notre équipe peut vous aider à choisir le bon véhicule. Appelez ou chattez 24h/24.',
    cta_talk:'Nous contacter',cta_view_deals:'Voir les offres actuelles',cta_pick_city_t:'Choisissez votre ville, prenez la route',cta_pick_city_s:'Recherchez la disponibilité dans plus de 500 agences aux États-Unis.',
    cta_find_cars:'Trouver des voitures près de moi',cta_contact_br:'Contacter une agence',cta_save_t:'Prêt à économiser ?',cta_save_s:'Parcourez les voitures disponibles et appliquez votre code promo à la caisse.',
    cta_browse:'Parcourir les voitures',cta_join_t:'Rejoignez la famille RoarAway',cta_join_s:'Nous recrutons partout aux États-Unis. Consultez les postes ouverts ou réservez votre prochain véhicule.',cta_careers:'Voir les carrières',
  }
};

/* ════════════════════════════════════════
   I18N ENGINE
════════════════════════════════════════ */

const I18N = {
  current: localStorage.getItem('da_lang') || 'en',

  t(key) {
    return (TRANSLATIONS[this.current] && TRANSLATIONS[this.current][key])
      || TRANSLATIONS['en'][key]
      || key;
  },

  apply() {
    const lang = this.current;
    // Update <html lang>
    document.documentElement.lang = lang;

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.dataset.i18nHtml !== undefined) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // Sync all dialect selects to current language
    document.querySelectorAll('.lang-select').forEach(sel => {
      sel.value = lang;
    });

    // Persist
    localStorage.setItem('da_lang', lang);
  },

  set(lang) {
    this.current = lang;
    this.apply();
  },

  init() {
    this.apply();
    document.querySelectorAll('.lang-select').forEach(sel => {
      sel.addEventListener('change', () => this.set(sel.value));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
