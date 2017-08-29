import { SearchLocation } from './search-location';

//export const LOCATIONS: SearchLocation[] = [{"key":"dublincity","name":"Dublin City"},{"key":"abbeywood","name":"Abbey Wood"},{"key":"abbotslangley","name":"Abbots Langley"},{"key":"abercarn","name":"Abercarn"},{"key":"aberdare","name":"Aberdare"},{"key":"aberdeen","name":"Aberdeen"},{"key":"abergavenny","name":"Abergavenny"},{"key":"abergele","name":"Abergele"},{"key":"aberkenfig","name":"Aberkenfig"},{"key":"abertillery","name":"Abertillery"},{"key":"aberystwyth","name":"Aberystwyth"},{"key":"abingdon","name":"Abingdon"},{"key":"abram","name":"Abram"},{"key":"accrington","name":"Accrington"},{"key":"acocksgreen","name":"Acocks Green"},{"key":"acton","name":"Acton"},{"key":"addlestone","name":"Addlestone"},{"key":"adwicklestreet","name":"Adwick le Street"},{"key":"airdrie","name":"Airdrie"},{"key":"aldershot","name":"Aldershot"},{"key":"aldridge","name":"Aldridge"},{"key":"alfreton","name":"Alfreton"},{"key":"alloa","name":"Alloa"},{"key":"alsager","name":"Alsager"},{"key":"alton","name":"Alton"},{"key":"altrincham","name":"Altrincham"},{"key":"amersham","name":"Amersham"},{"key":"amershamonthehill","name":"Amersham on the Hill"},{"key":"amesbury","name":"Amesbury"},{"key":"ammanford","name":"Ammanford"},{"key":"ampthill","name":"Ampthill"},{"key":"andover","name":"Andover"},{"key":"annfieldplain","name":"Annfield Plain"},{"key":"antrim","name":"Antrim"},{"key":"arbroath","name":"Arbroath"},{"key":"ardrossan","name":"Ardrossan"},{"key":"armadale","name":"Armadale"},{"key":"armagh","name":"Armagh"},{"key":"armthorpe","name":"Armthorpe"},{"key":"arnold","name":"Arnold"},{"key":"ascot","name":"Ascot"},{"key":"ashbydelazouch","name":"Ashby de la Zouch"},{"key":"ashford","name":"Ashford"},{"key":"ashford","name":"Ashford"},{"key":"ashington","name":"Ashington"},{"key":"ashtead","name":"Ashtead"},{"key":"ashtoninmakerfield","name":"Ashton in Makerfield"},{"key":"ashton-under-lyne","name":"Ashton-under-Lyne"},{"key":"atherstone","name":"Atherstone"},{"key":"atherton","name":"Atherton"},{"key":"attleborough","name":"Attleborough"},{"key":"aylesbury","name":"Aylesbury"},{"key":"ayr","name":"Ayr"},{"key":"bacup","name":"Bacup"},{"key":"baildon","name":"Baildon"},{"key":"baldock","name":"Baldock"},{"key":"ballymena","name":"Ballymena"},{"key":"banbridge","name":"Banbridge"},{"key":"banbury","name":"Banbury"},{"key":"bangor","name":"Bangor"},{"key":"bangor","name":"Bangor"},{"key":"banstead","name":"Banstead"},{"key":"bargoed","name":"Bargoed"},{"key":"barking","name":"Barking"},{"key":"barnet","name":"Barnet"},{"key":"barnham","name":"Barnham"},{"key":"barnoldswick","name":"Barnoldswick"},{"key":"barnsbury","name":"Barnsbury"},{"key":"barnsley","name":"Barnsley"},{"key":"barnstaple","name":"Barnstaple"},{"key":"barrhead","name":"Barrhead"},{"key":"barrowinfurness","name":"Barrow in Furness"},{"key":"barry","name":"Barry"},{"key":"bartleygreen","name":"Bartley Green"},{"key":"bartonuponhumber","name":"Barton upon Humber"},{"key":"basford","name":"Basford"},{"key":"basildon","name":"Basildon"},{"key":"basingstoke","name":"Basingstoke"},{"key":"bath","name":"Bath"},{"key":"bathgate","name":"Bathgate"},{"key":"batley","name":"Batley"},{"key":"battersea","name":"Battersea"},{"key":"bayswater","name":"Bayswater"},{"key":"beaconsfield","name":"Beaconsfield"},{"key":"bearsden","name":"Bearsden"},{"key":"bebington","name":"Bebington"},{"key":"beccles","name":"Beccles"},{"key":"beckenham","name":"Beckenham"},{"key":"becontree","name":"Becontree"},{"key":"bedford","name":"Bedford"},{"key":"bedlington","name":"Bedlington"},{"key":"bedworth","name":"Bedworth"},{"key":"beighton","name":"Beighton"},{"key":"belfast","name":"Belfast"},{"key":"bellshill","name":"Bellshill"},{"key":"belper","name":"Belper"},{"key":"belsizepark","name":"Belsize Park"},{"key":"belvedere","name":"Belvedere"},{"key":"bentley","name":"Bentley"},{"key":"berkhamsted","name":"Berkhamsted"},{"key":"berwick-upon-tweed","name":"Berwick-Upon-Tweed"},{"key":"bethnalgreen","name":"Bethnal Green"},{"key":"beverley","name":"Beverley"},{"key":"bexhill-on-sea","name":"Bexhill-on-Sea"},{"key":"bexley","name":"Bexley"},{"key":"bicester","name":"Bicester"},{"key":"biddulph","name":"Biddulph"},{"key":"bideford","name":"Bideford"},{"key":"bigginhill","name":"Biggin Hill"},{"key":"biggleswade","name":"Biggleswade"},{"key":"billericay","name":"Billericay"},{"key":"billingham","name":"Billingham"},{"key":"bingley","name":"Bingley"},{"key":"birkenhead","name":"Birkenhead"},{"key":"birmingham","name":"Birmingham"},{"key":"bishopauckland","name":"Bishop Auckland"},{"key":"bishopbriggs","name":"Bishopbriggs"},{"key":"bishopscleeve","name":"Bishops Cleeve"},{"key":"bishopsstortford","name":"Bishops Stortford"},{"key":"bishopstoke","name":"Bishopstoke"},{"key":"blackburn","name":"Blackburn"},{"key":"blackheath","name":"Blackheath"},{"key":"blackley","name":"Blackley"},{"key":"blackpool","name":"Blackpool"},{"key":"blackwood","name":"Blackwood"},{"key":"blacon","name":"Blacon"},{"key":"blandfordforum","name":"Blandford Forum"},{"key":"blantyre","name":"Blantyre"},{"key":"blaydon-on-tyne","name":"Blaydon-on-Tyne"},{"key":"bletchley","name":"Bletchley"},{"key":"bloxwich","name":"Bloxwich"},{"key":"blyth","name":"Blyth"},{"key":"bo'ness","name":"Bo'ness"},{"key":"bodmin","name":"Bodmin"},{"key":"bognorregis","name":"Bognor Regis"},{"key":"bolsover","name":"Bolsover"},{"key":"bolton","name":"Bolton"},{"key":"boltonupondearne","name":"Bolton upon Dearne"},{"key":"bonnyrigg","name":"Bonnyrigg"},{"key":"bootle","name":"Bootle"},{"key":"bordon","name":"Bordon"},{"key":"borehamwood","name":"Borehamwood"},{"key":"boston","name":"Boston"},{"key":"boughton","name":"Boughton"},{"key":"bourne","name":"Bourne"},{"key":"bournemouth","name":"Bournemouth"},{"key":"bowthorpe","name":"Bowthorpe"},{"key":"brackley","name":"Brackley"},{"key":"bracknell","name":"Bracknell"},{"key":"bradford","name":"Bradford"},{"key":"braintree","name":"Braintree"},{"key":"bramhall","name":"Bramhall"},{"key":"bredbury","name":"Bredbury"},{"key":"brentford","name":"Brentford"},{"key":"brentwood","name":"Brentwood"},{"key":"bridgend","name":"Bridgend"},{"key":"bridgnorth","name":"Bridgnorth"},{"key":"bridgwater","name":"Bridgwater"},{"key":"bridlington","name":"Bridlington"},{"key":"bridport","name":"Bridport"},{"key":"brierfield","name":"Brierfield"},{"key":"brierleyhill","name":"Brierley Hill"},{"key":"brighouse","name":"Brighouse"},{"key":"brighton","name":"Brighton"},{"key":"bristol","name":"Bristol"},{"key":"britonferry","name":"Briton Ferry"},{"key":"brixham","name":"Brixham"},{"key":"brixton","name":"Brixton"},{"key":"brixtonhill","name":"Brixton Hill"},{"key":"broadfield","name":"Broadfield"},{"key":"broadstairs","name":"Broadstairs"},{"key":"broadstone","name":"Broadstone"},{"key":"bromborough","name":"Bromborough"},{"key":"bromsgrove","name":"Bromsgrove"},{"key":"brough","name":"Brough"},{"key":"brownhills","name":"Brownhills"},{"key":"broxbourne","name":"Broxbourne"},{"key":"broxburn","name":"Broxburn"},{"key":"brymbo","name":"Brymbo"},{"key":"brynmawr","name":"Brynmawr"},{"key":"buckhursthill","name":"Buckhurst Hill"},{"key":"buckingham","name":"Buckingham"},{"key":"buckley","name":"Buckley"},{"key":"burgesshill","name":"Burgess Hill"},{"key":"burnage","name":"Burnage"},{"key":"burnham-on-sea","name":"Burnham-on-Sea"},{"key":"burnley","name":"Burnley"},{"key":"burntwood","name":"Burntwood"},{"key":"burtonupontrent","name":"Burton upon Trent"},{"key":"bury","name":"Bury"},{"key":"burystedmunds","name":"Bury St Edmunds"},{"key":"bushey","name":"Bushey"},{"key":"buxton","name":"Buxton"},{"key":"caerphilly","name":"Caerphilly"},{"key":"caldicot","name":"Caldicot"},{"key":"calne","name":"Calne"},{"key":"camberley","name":"Camberley"},{"key":"camborne","name":"Camborne"},{"key":"cambridge","name":"Cambridge"},{"key":"cambuslang","name":"Cambuslang"},{"key":"camdentown","name":"Camden Town"},{"key":"canarywharf","name":"Canary Wharf"},{"key":"canfordheath","name":"Canford Heath"},{"key":"cannock","name":"Cannock"},{"key":"canterbury","name":"Canterbury"},{"key":"canveyisland","name":"Canvey Island"},{"key":"cardiff","name":"Cardiff"},{"key":"carlisle","name":"Carlisle"},{"key":"carluke","name":"Carluke"},{"key":"carmarthen","name":"Carmarthen"},{"key":"carnoustie","name":"Carnoustie"},{"key":"carrickfergus","name":"Carrickfergus"},{"key":"carshalton","name":"Carshalton"},{"key":"carterton","name":"Carterton"},{"key":"castleford","name":"Castleford"},{"key":"castlereagh","name":"Castlereagh"},{"key":"caterham","name":"Caterham"},{"key":"catterickgarrison","name":"Catterick Garrison"},{"key":"chaffordhundred","name":"Chafford Hundred"},{"key":"chalfontsaintpeter","name":"Chalfont Saint Peter"},{"key":"chapelallerton","name":"Chapel Allerton"},{"key":"chapletown","name":"Chapletown"},{"key":"chard","name":"Chard"},{"key":"charltonkings","name":"Charlton Kings"},{"key":"chatham","name":"Chatham"},{"key":"chatteris","name":"Chatteris"},{"key":"cheadle","name":"Cheadle"},{"key":"cheadlehulme","name":"Cheadle Hulme"},{"key":"cheam","name":"Cheam"},{"key":"cheethamhill","name":"Cheetham Hill"},{"key":"chelmsford","name":"Chelmsford"},{"key":"chelmsleywood","name":"Chelmsley Wood"},{"key":"chelsea","name":"Chelsea"},{"key":"cheltenham","name":"Cheltenham"},{"key":"chepstow","name":"Chepstow"},{"key":"chertsey","name":"Chertsey"},{"key":"chesham","name":"Chesham"},{"key":"cheshunt","name":"Cheshunt"},{"key":"chessington","name":"Chessington"},{"key":"chester","name":"Chester"},{"key":"chester-le-street","name":"Chester-le-Street"},{"key":"chesterfield","name":"Chesterfield"},{"key":"chichester","name":"Chichester"},{"key":"chigwell","name":"Chigwell"},{"key":"chippenham","name":"Chippenham"},{"key":"chippingsodbury","name":"Chipping Sodbury"},{"key":"chislehurst","name":"Chislehurst"},{"key":"chorley","name":"Chorley"},{"key":"chorleywood","name":"Chorleywood"},{"key":"christchurch","name":"Christchurch"},{"key":"churchdown","name":"Churchdown"},{"key":"cinderford","name":"Cinderford"},{"key":"cirencester","name":"Cirencester"},{"key":"clacton-on-sea","name":"Clacton-on-Sea"},{"key":"clayton-le-woods","name":"Clayton-le-Woods"},{"key":"cleckheaton","name":"Cleckheaton"},{"key":"cleethorpes","name":"Cleethorpes"},{"key":"clevedon","name":"Clevedon"},{"key":"cleveleys","name":"Cleveleys"},{"key":"clitheroe","name":"Clitheroe"},{"key":"clydach","name":"Clydach"},{"key":"clydebank","name":"Clydebank"},{"key":"coalville","name":"Coalville"},{"key":"coatbridge","name":"Coatbridge"},{"key":"cobham","name":"Cobham"},{"key":"cockington","name":"Cockington"},{"key":"codicote","name":"Codicote"},{"key":"codsall","name":"Codsall"},{"key":"coity","name":"Coity"},{"key":"collierrow","name":"Collier Row"},{"key":"craigavon","name":"Craigavon"},{"key":"crosby","name":"Crosby"},{"key":"crosshills","name":"Cross Hills"},{"key":"crouchend","name":"Crouch End"},{"key":"crumpsall","name":"Crumpsall"},{"key":"darrashall","name":"Darras Hall"},{"key":"deeside","name":"Deeside"},{"key":"derry","name":"Derry"},{"key":"didsbury","name":"Didsbury"},{"key":"earlshilton","name":"Earl Shilton"},{"key":"earlsfield","name":"Earlsfield"},{"key":"elmpark","name":"Elm Park"},{"key":"erskine","name":"Erskine"},{"key":"ewell","name":"Ewell"},{"key":"failsworth","name":"Failsworth"},{"key":"fallowfield","name":"Fallowfield"},{"key":"featherstone","name":"Featherstone"},{"key":"ferndown","name":"Ferndown"},{"key":"gerrardscross","name":"Gerrards Cross"},{"key":"grangehill","name":"Grange Hill"},{"key":"hadleywood","name":"Hadley Wood"},{"key":"hale","name":"Hale"},{"key":"haroldwood","name":"Harold Wood"},{"key":"harringay","name":"Harringay"},{"key":"haylingisland","name":"Hayling Island"},{"key":"heavitree","name":"Heavitree"},{"key":"hedgeend","name":"Hedge End"},{"key":"heywood","name":"Heywood"},{"key":"highpeak","name":"High Peak"},{"key":"holloway","name":"Holloway"},{"key":"hornchurch","name":"Hornchurch"},{"key":"irvine","name":"Irvine"},{"key":"isleoflewis","name":"Isle of Lewis"},{"key":"isleworth","name":"Isleworth"},{"key":"islington","name":"Islington"},{"key":"ivybridge","name":"Ivybridge"},{"key":"jarrow","name":"Jarrow"},{"key":"johnstone","name":"Johnstone"},{"key":"kearsley","name":"Kearsley"},{"key":"keighley","name":"Keighley"},{"key":"kempston","name":"Kempston"},{"key":"kempstonhardwick","name":"Kempston Hardwick"},{"key":"kendal","name":"Kendal"},{"key":"kenilworth","name":"Kenilworth"},{"key":"kesgrave","name":"Kesgrave"},{"key":"kettering","name":"Kettering"},{"key":"keynsham","name":"Keynsham"},{"key":"kidderminster","name":"Kidderminster"},{"key":"kidlington","name":"Kidlington"},{"key":"kidsgrove","name":"Kidsgrove"},{"key":"kilmarnock","name":"Kilmarnock"},{"key":"kilwinning","name":"Kilwinning"},{"key":"kimberley","name":"Kimberley"},{"key":"king'slynn","name":"King's Lynn"},{"key":"kingsteignton","name":"Kingsteignton"},{"key":"kingstonuponhull","name":"Kingston upon Hull"},{"key":"kingstonuponthames","name":"Kingston upon Thames"},{"key":"kingswinford","name":"Kingswinford"},{"key":"kingswood","name":"Kingswood"},{"key":"kippax","name":"Kippax"},{"key":"kirksandall","name":"Kirk Sandall"},{"key":"kirkby","name":"Kirkby"},{"key":"kirkbyinashfield","name":"Kirkby in Ashfield"},{"key":"kirkcaldy","name":"Kirkcaldy"},{"key":"kirkham","name":"Kirkham"},{"key":"kirkintilloch","name":"Kirkintilloch"},{"key":"knaresborough","name":"Knaresborough"},{"key":"knottingley","name":"Knottingley"},{"key":"knowle","name":"Knowle"},{"key":"knutsford","name":"Knutsford"},{"key":"lancaster","name":"Lancaster"},{"key":"lancing","name":"Lancing"},{"key":"largs","name":"Largs"},{"key":"larkhall","name":"Larkhall"},{"key":"larne","name":"Larne"},{"key":"leatherhead","name":"Leatherhead"},{"key":"leeds","name":"Leeds"},{"key":"leek","name":"Leek"},{"key":"leicester","name":"Leicester"},{"key":"leigh","name":"Leigh"},{"key":"leightonbuzzard","name":"Leighton Buzzard"},{"key":"leominster","name":"Leominster"},{"key":"letchworth","name":"Letchworth"},{"key":"letchworthgardencity","name":"Letchworth Garden City"},{"key":"lewes","name":"Lewes"},{"key":"leyland","name":"Leyland"},{"key":"lichfield","name":"Lichfield"},{"key":"limavady","name":"Limavady"},{"key":"lincoln","name":"Lincoln"},{"key":"linlithgow","name":"Linlithgow"},{"key":"lisburn","name":"Lisburn"},{"key":"litherland","name":"Litherland"},{"key":"littlehulton","name":"Little Hulton"},{"key":"littlelever","name":"Little Lever"},{"key":"littleborough","name":"Littleborough"},{"key":"littlehampton","name":"Littlehampton"},{"key":"liverpool","name":"Liverpool"},{"key":"liversedge","name":"Liversedge"},{"key":"livingston","name":"Livingston"},{"key":"llandudno","name":"Llandudno"},{"key":"llanelli","name":"Llanelli"},{"key":"llantrisant","name":"Llantrisant"},{"key":"llantwitmajor","name":"Llantwit Major"},{"key":"lofthouse","name":"Lofthouse"},{"key":"london","name":"London"},{"key":"londonderrycountyborough","name":"Londonderry County Borough"},{"key":"longeaton","name":"Long Eaton"},{"key":"longfield","name":"Longfield"},{"key":"longsight","name":"Longsight"},{"key":"longton","name":"Longton"},{"key":"loughborough","name":"Loughborough"},{"key":"louth","name":"Louth"},{"key":"lowerearley","name":"Lower Earley"},{"key":"lowestoft","name":"Lowestoft"},{"key":"ludlow","name":"Ludlow"},{"key":"luton","name":"Luton"},{"key":"lymington","name":"Lymington"},{"key":"lymm","name":"Lymm"},{"key":"lythamstannes","name":"Lytham St Annes"},{"key":"mablethorpe","name":"Mablethorpe"},{"key":"macclesfield","name":"Macclesfield"},{"key":"maesteg","name":"Maesteg"},{"key":"maghull","name":"Maghull"},{"key":"maidenhead","name":"Maidenhead"},{"key":"maidstone","name":"Maidstone"},{"key":"maldon","name":"Maldon"},{"key":"maltby","name":"Maltby"},{"key":"manchester","name":"Manchester"},{"key":"mangotsfield","name":"Mangotsfield"},{"key":"mansfield","name":"Mansfield"},{"key":"mansfieldwoodhouse","name":"Mansfield Woodhouse"},{"key":"march","name":"March"},{"key":"margate","name":"Margate"},{"key":"marketdeeping","name":"Market Deeping"},{"key":"marketdrayton","name":"Market Drayton"},{"key":"marketharborough","name":"Market Harborough"},{"key":"marlow","name":"Marlow"},{"key":"marple","name":"Marple"},{"key":"matlock","name":"Matlock"},{"key":"mayfield","name":"Mayfield"},{"key":"melksham","name":"Melksham"},{"key":"meltonmowbray","name":"Melton Mowbray"},{"key":"mendip","name":"Mendip"},{"key":"merthyrtydfil","name":"Merthyr Tydfil"},{"key":"methil","name":"Methil"},{"key":"mexborough","name":"Mexborough"},{"key":"middlesbrough","name":"Middlesbrough"},{"key":"middleton","name":"Middleton"},{"key":"middlewich","name":"Middlewich"},{"key":"midsomernorton","name":"Midsomer Norton"},{"key":"mildenhall","name":"Mildenhall"},{"key":"milfordhaven","name":"Milford Haven"},{"key":"milngavie","name":"Milngavie"},{"key":"milnrow","name":"Milnrow"},{"key":"miltonkeynes","name":"Milton Keynes"},{"key":"minehead","name":"Minehead"},{"key":"mirfield","name":"Mirfield"},{"key":"mitcham","name":"Mitcham"},{"key":"mold","name":"Mold"},{"key":"monmouth","name":"Monmouth"},{"key":"montrose","name":"Montrose"},{"key":"morecambe","name":"Morecambe"},{"key":"moreton","name":"Moreton"},{"key":"morley","name":"Morley"},{"key":"morpeth","name":"Morpeth"},{"key":"motherwell","name":"Motherwell"},{"key":"mountainash","name":"Mountain Ash"},{"key":"mountsorrel","name":"Mountsorrel"},{"key":"musselburgh","name":"Musselburgh"},{"key":"nailsea","name":"Nailsea"},{"key":"nantwich","name":"Nantwich"},{"key":"neath","name":"Neath"},{"key":"nelson","name":"Nelson"},{"key":"nelson","name":"Nelson"},{"key":"neston","name":"Neston"},{"key":"neston","name":"Neston"},{"key":"newmalden","name":"New Malden"},{"key":"newmills","name":"New Mills"},{"key":"newmilton","name":"New Milton"},{"key":"newarkontrent","name":"Newark on Trent"},{"key":"newburn","name":"Newburn"},{"key":"newbury","name":"Newbury"},{"key":"newcastleunderlyme","name":"Newcastle under Lyme"},{"key":"newcastleupontyne","name":"Newcastle upon Tyne"},{"key":"newhaven","name":"Newhaven"},{"key":"newmarket","name":"Newmarket"},{"key":"newport","name":"Newport"},{"key":"newport","name":"Newport"},{"key":"newport","name":"Newport"},{"key":"newportpagnell","name":"Newport Pagnell"},{"key":"newquay","name":"Newquay"},{"key":"newry","name":"Newry"},{"key":"newtonabbot","name":"Newton Abbot"},{"key":"newtonaycliffe","name":"Newton Aycliffe"},{"key":"newtonmearns","name":"Newton Mearns"},{"key":"newton-le-willows","name":"Newton-le-Willows"},{"key":"newtown","name":"Newtown"},{"key":"newtownabbey","name":"Newtownabbey"},{"key":"newtownards","name":"Newtownards"},{"key":"northshields","name":"North Shields"},{"key":"northwalsham","name":"North Walsham"},{"key":"northallerton","name":"Northallerton"},{"key":"northampton","name":"Northampton"},{"key":"northolt","name":"Northolt"},{"key":"northwich","name":"Northwich"},{"key":"norwich","name":"Norwich"},{"key":"nottingham","name":"Nottingham"},{"key":"nuneaton","name":"Nuneaton"},{"key":"oadby","name":"Oadby"},{"key":"oakham","name":"Oakham"},{"key":"oldbury","name":"Oldbury"},{"key":"oldham","name":"Oldham"},{"key":"omagh","name":"Omagh"},{"key":"orkney","name":"Orkney"},{"key":"ormskirk","name":"Ormskirk"},{"key":"orpington","name":"Orpington"},{"key":"ossett","name":"Ossett"},{"key":"oswestry","name":"Oswestry"},{"key":"otley","name":"Otley"},{"key":"oxford","name":"Oxford"},{"key":"oxted","name":"Oxted"},{"key":"padiham","name":"Padiham"},{"key":"paignton","name":"Paignton"},{"key":"paisley","name":"Paisley"},{"key":"peacehaven","name":"Peacehaven"},{"key":"pelsall","name":"Pelsall"},{"key":"penarth","name":"Penarth"},{"key":"penicuik","name":"Penicuik"},{"key":"penistone","name":"Penistone"},{"key":"penrith","name":"Penrith"},{"key":"penzance","name":"Penzance"},{"key":"perth","name":"Perth"},{"key":"peterborough","name":"Peterborough"},{"key":"peterhead","name":"Peterhead"},{"key":"peterlee","name":"Peterlee"},{"key":"petersfield","name":"Petersfield"},{"key":"pinner","name":"Pinner"},{"key":"pinxton","name":"Pinxton"},{"key":"pitsea","name":"Pitsea"},{"key":"plymouth","name":"Plymouth"},{"key":"plymstock","name":"Plymstock"},{"key":"pontefract","name":"Pontefract"},{"key":"ponteland","name":"Ponteland"},{"key":"pontypool","name":"Pontypool"},{"key":"pontypridd","name":"Pontypridd"},{"key":"poole","name":"Poole"},{"key":"portglasgow","name":"Port Glasgow"},{"key":"portadown","name":"Portadown"},{"key":"porthcawl","name":"Porthcawl"},{"key":"portishead","name":"Portishead"},{"key":"portland","name":"Portland"},{"key":"portslade","name":"Portslade"},{"key":"portsmouth","name":"Portsmouth"},{"key":"pottersbar","name":"Potters Bar"},{"key":"poultonlefylde","name":"Poulton le Fylde"},{"key":"poynton","name":"Poynton"},{"key":"prenton","name":"Prenton"},{"key":"prescot","name":"Prescot"},{"key":"prestatyn","name":"Prestatyn"},{"key":"preston","name":"Preston"},{"key":"prestwich","name":"Prestwich"},{"key":"prestwick","name":"Prestwick"},{"key":"prudhoe","name":"Prudhoe"},{"key":"pudsey","name":"Pudsey"},{"key":"purfleet","name":"Purfleet"},{"key":"purley","name":"Purley"},{"key":"pyle","name":"Pyle"},{"key":"radcliffe","name":"Radcliffe"},{"key":"ramsbottom","name":"Ramsbottom"},{"key":"ramsgate","name":"Ramsgate"},{"key":"rawmarsh","name":"Rawmarsh"},{"key":"rawtenstall","name":"Rawtenstall"},{"key":"rayleigh","name":"Rayleigh"},{"key":"reading","name":"Reading"},{"key":"redcar","name":"Redcar"},{"key":"redditch","name":"Redditch"},{"key":"redhill","name":"Redhill"},{"key":"redruth","name":"Redruth"},{"key":"reigate","name":"Reigate"},{"key":"renfrew","name":"Renfrew"},{"key":"rhondda","name":"Rhondda"},{"key":"rhosllanerchrugog","name":"Rhosllanerchrugog"},{"key":"rhyl","name":"Rhyl"},{"key":"rickmansworth","name":"Rickmansworth"},{"key":"ringwood","name":"Ringwood"},{"key":"ripley","name":"Ripley"},{"key":"ripon","name":"Ripon"},{"key":"risca","name":"Risca"},{"key":"rochdale","name":"Rochdale"},{"key":"rochester","name":"Rochester"},{"key":"rochford","name":"Rochford"},{"key":"romsey","name":"Romsey"},{"key":"rossonwye","name":"Ross on Wye"},{"key":"rossendale","name":"Rossendale"},{"key":"rosyth","name":"Rosyth"},{"key":"rotherham","name":"Rotherham"},{"key":"rottingdean","name":"Rottingdean"},{"key":"royalleamingtonspa","name":"Royal Leamington Spa"},{"key":"royaltunbridgewells","name":"Royal Tunbridge Wells"},{"key":"royston","name":"Royston"},{"key":"royton","name":"Royton"},{"key":"rugby","name":"Rugby"},{"key":"rugeley","name":"Rugeley"},{"key":"ruislip","name":"Ruislip"},{"key":"runcorn","name":"Runcorn"},{"key":"rushden","name":"Rushden"},{"key":"rustington","name":"Rustington"},{"key":"rutherglen","name":"Rutherglen"},{"key":"ryde","name":"Ryde"},{"key":"ryhope","name":"Ryhope"},{"key":"ryton","name":"Ryton"},{"key":"saffronwalden","name":"Saffron Walden"},{"key":"saintandrews","name":"Saint Andrews"},{"key":"saintleonards-on-sea","name":"Saint Leonards-on-Sea"},{"key":"saintneots","name":"Saint Neots"},{"key":"saintpeters","name":"Saint Peters"},{"key":"sale","name":"Sale"},{"key":"salford","name":"Salford"},{"key":"salisbury","name":"Salisbury"},{"key":"saltash","name":"Saltash"},{"key":"saltcoats","name":"Saltcoats"},{"key":"sandbach","name":"Sandbach"},{"key":"sandown","name":"Sandown"},{"key":"sandy","name":"Sandy"},{"key":"scarborough","name":"Scarborough"},{"key":"scunthorpe","name":"Scunthorpe"},{"key":"seaford","name":"Seaford"},{"key":"seaham","name":"Seaham"},{"key":"selby","name":"Selby"},{"key":"selsey","name":"Selsey"},{"key":"sevenoaks","name":"Sevenoaks"},{"key":"sheerness","name":"Sheerness"},{"key":"sheffield","name":"Sheffield"},{"key":"shefford","name":"Shefford"},{"key":"shepperton","name":"Shepperton"},{"key":"shepshed","name":"Shepshed"},{"key":"sheptonmallet","name":"Shepton Mallet"},{"key":"shetland","name":"Shetland"},{"key":"shipley","name":"Shipley"},{"key":"shirebrook","name":"Shirebrook"},{"key":"shirley","name":"Shirley"},{"key":"shoreham-by-sea","name":"Shoreham-by-Sea"},{"key":"shrewsbury","name":"Shrewsbury"},{"key":"sidcup","name":"Sidcup"},{"key":"sidmouth","name":"Sidmouth"},{"key":"sittingbourne","name":"Sittingbourne"},{"key":"skegness","name":"Skegness"},{"key":"skelmersdale","name":"Skelmersdale"},{"key":"skipton","name":"Skipton"},{"key":"sleaford","name":"Sleaford"},{"key":"slough","name":"Slough"},{"key":"smethwick","name":"Smethwick"},{"key":"snodland","name":"Snodland"},{"key":"solihull","name":"Solihull"},{"key":"southbenfleet","name":"South Benfleet"},{"key":"southcroydon","name":"South Croydon"},{"key":"southelmsall","name":"South Elmsall"},{"key":"southhayling","name":"South Hayling"},{"key":"southockendon","name":"South Ockendon"},{"key":"southshields","name":"South Shields"},{"key":"southall","name":"Southall"},{"key":"southampton","name":"Southampton"},{"key":"southend-on-sea","name":"Southend-on-Sea"},{"key":"southport","name":"Southport"},{"key":"southsea","name":"Southsea"},{"key":"spalding","name":"Spalding"},{"key":"spennymoor","name":"Spennymoor"},{"key":"stalbans","name":"St Albans"},{"key":"staustell","name":"St Austell"},{"key":"sthelens","name":"St Helens"},{"key":"stafford","name":"Stafford"},{"key":"staines","name":"Staines"},{"key":"stalybridge","name":"Stalybridge"},{"key":"stamford","name":"Stamford"},{"key":"stanford-le-hope","name":"Stanford-le-Hope"},{"key":"stanley","name":"Stanley"},{"key":"staveley","name":"Staveley"},{"key":"stenhousemuir","name":"Stenhousemuir"},{"key":"stevenage","name":"Stevenage"},{"key":"stirling","name":"Stirling"},{"key":"stockport","name":"Stockport"},{"key":"stocksbridge","name":"Stocksbridge"},{"key":"stockton-on-tees","name":"Stockton-on-Tees"},{"key":"stokegifford","name":"Stoke Gifford"},{"key":"stoke-on-trent","name":"Stoke-on-Trent"},{"key":"stone","name":"Stone"},{"key":"stonehaven","name":"Stonehaven"},{"key":"stourbridge","name":"Stourbridge"},{"key":"stourport-on-severn","name":"Stourport-on-Severn"},{"key":"stowmarket","name":"Stowmarket"},{"key":"strabane","name":"Strabane"},{"key":"stranraer","name":"Stranraer"},{"key":"surbiton","name":"Surbiton"},{"key":"telford","name":"Telford"},{"key":"theboldons","name":"The Boldons"},{"key":"thornton-cleveleys","name":"Thornton-Cleveleys"},{"key":"tonypandy","name":"Tonypandy"},{"key":"uckfield","name":"Uckfield"},{"key":"upminster","name":"Upminster"},{"key":"uxbridge","name":"Uxbridge"},{"key":"valeofleven","name":"Vale of Leven"},{"key":"verwood","name":"Verwood"},{"key":"viewpark","name":"Viewpark"},{"key":"wakefield","name":"Wakefield"},{"key":"walkden","name":"Walkden"},{"key":"wallasey","name":"Wallasey"},{"key":"wallingford","name":"Wallingford"},{"key":"wallsend","name":"Wallsend"},{"key":"walsall","name":"Walsall"},{"key":"walthamabbey","name":"Waltham Abbey"},{"key":"walthamcross","name":"Waltham Cross"},{"key":"walton-on-thames","name":"Walton-on-Thames"},{"key":"walton-on-the-naze","name":"Walton-on-the-Naze"},{"key":"wantage","name":"Wantage"},{"key":"ware","name":"Ware"},{"key":"warminster","name":"Warminster"},{"key":"warrington","name":"Warrington"},{"key":"warwick","name":"Warwick"},{"key":"washington","name":"Washington"},{"key":"waterlooville","name":"Waterlooville"},{"key":"watford","name":"Watford"},{"key":"wathupondearne","name":"Wath upon Dearne"},{"key":"wednesbury","name":"Wednesbury"},{"key":"wednesfield","name":"Wednesfield"},{"key":"welling","name":"Welling"},{"key":"wellingborough","name":"Wellingborough"},{"key":"wellington","name":"Wellington"},{"key":"wells","name":"Wells"},{"key":"welwyngardencity","name":"Welwyn Garden City"},{"key":"westbridgford","name":"West Bridgford"},{"key":"westbromwich","name":"West Bromwich"},{"key":"westdrayton","name":"West Drayton"},{"key":"westendoflondon","name":"West End of London"},{"key":"westmolesey","name":"West Molesey"},{"key":"westwickham","name":"West Wickham"},{"key":"westbury","name":"Westbury"},{"key":"westhill","name":"Westhill"},{"key":"westhoughton","name":"Westhoughton"},{"key":"weston-super-mare","name":"Weston-super-Mare"},{"key":"wetherby","name":"Wetherby"},{"key":"weybridge","name":"Weybridge"},{"key":"weymouth","name":"Weymouth"},{"key":"whickham","name":"Whickham"},{"key":"whitburn","name":"Whitburn"},{"key":"whitby","name":"Whitby"},{"key":"whitefield","name":"Whitefield"},{"key":"whitehaven","name":"Whitehaven"},{"key":"whitleybay","name":"Whitley Bay"},{"key":"whitstable","name":"Whitstable"},{"key":"whittlesey","name":"Whittlesey"},{"key":"wickford","name":"Wickford"},{"key":"widnes","name":"Widnes"},{"key":"wigan","name":"Wigan"},{"key":"wigstonmagna","name":"Wigston Magna"},{"key":"willenhall","name":"Willenhall"},{"key":"wilmslow","name":"Wilmslow"},{"key":"wimborneminster","name":"Wimborne Minster"},{"key":"yateley","name":"Yateley"},{"key":"ystradgynlais","name":"Ystradgynlais"}]
export const LOCATIONS: SearchLocation[] = [{"key":"dublincity","name":"Dublin City"},{"key":"bristol","name":"Bristol"}]