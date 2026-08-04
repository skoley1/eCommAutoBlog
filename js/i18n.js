/* ===== DriveAway — i18n (EN / DE) ===== */

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
    hero_h1:         'Rent a Car<br>Anywhere in the <span>USA</span>',
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
    feat_tag:        'Why DriveAway',
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
    locs_return_t:   'Return Anywhere',
    locs_return_d:   'Drop off at any DriveAway airport or city location. One-way rentals available between all 500+ sites.',

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
    about_team_title:'The People Behind DriveAway',
    about_team_sub:  'A diverse team of operators, technologists, and road-trip enthusiasts.',
    about_press_tag: 'Press',
    about_press_title:'DriveAway in the News',
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
    contact_faq_sub: 'Quick answers to the most common questions about renting with DriveAway.',
    contact_manage:  "Need to Manage a Booking?",
    contact_manage_d:"Log in to your account or use your booking confirmation number to modify, cancel, or extend your reservation.",
    contact_manage_btn:'Manage My Booking',
    contact_cta_t:   'Still Have Questions?',
    contact_cta_s:   'Our team is available 24/7 by phone and chat — we\'re always happy to help.',
    contact_cta_btn: 'Call 1-800-DRIVEAWAY',

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
    footer_copy:     '© 2025 DriveAway, Inc. All rights reserved.',
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
    cta_join_t:      'Join the DriveAway Family',
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
    feat_tag:        'Warum DriveAway',
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
    locs_return_d:   'An jedem DriveAway-Flughafen oder Stadtstandort zurückgeben. Einwegmieten zwischen allen 500+ Standorten verfügbar.',

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
    about_team_title:'Die Menschen hinter DriveAway',
    about_team_sub:  'Ein vielfältiges Team aus Betreibern, Technologen und Roadtrip-Enthusiasten.',
    about_press_tag: 'Presse',
    about_press_title:'DriveAway in den Medien',
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
    contact_faq_sub: 'Schnelle Antworten auf die häufigsten Fragen zur Anmietung bei DriveAway.',
    contact_manage:  'Buchung verwalten?',
    contact_manage_d:'Melden Sie sich in Ihrem Konto an oder verwenden Sie Ihre Buchungsbestätigungsnummer, um Ihre Reservierung zu ändern, zu stornieren oder zu verlängern.',
    contact_manage_btn:'Meine Buchung verwalten',
    contact_cta_t:   'Noch Fragen?',
    contact_cta_s:   'Unser Team ist 24/7 per Telefon und Chat erreichbar — wir helfen Ihnen jederzeit gerne.',
    contact_cta_btn: '1-800-DRIVEAWAY anrufen',

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
    footer_copy:     '© 2025 DriveAway, Inc. Alle Rechte vorbehalten.',
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
    cta_join_t:      'Teil der DriveAway-Familie werden',
    cta_join_s:      'Wir stellen in den gesamten USA ein. Stellenangebote ansehen oder einfach Ihr nächstes Fahrzeug buchen.',
    cta_careers:     'Karriere ansehen',
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
