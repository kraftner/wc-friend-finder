(() => {

  /*
  CryptoJS v3.1.2
  code.google.com/p/crypto-js
  (c) 2009-2013 by Jeff Mott. All rights reserved.
  code.google.com/p/crypto-js/wiki/License
  */
  var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
      q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
            32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
            2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
      g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
          b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
        g)).finalize(a)}}});var k=m.algo={};return m}(Math);
  (function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
    _doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
        c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
            d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
            C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
        4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);

  function buildWordCampUrl(page){
    const apiUrl = new URL('wp-json/wp/v2/wordcamps', 'https://central.wordcamp.org');
    apiUrl.searchParams.append('per_page', '100');
    apiUrl.searchParams.append('page', page.toString());
    // Exclude some very old WCs that for some reason have new IDs.
    // apiUrl.searchParams.append('exclude', '3140735,3140740,3140742');
    apiUrl.searchParams.append('_fields[]', 'id');
    apiUrl.searchParams.append('_fields[]', 'title');
    apiUrl.searchParams.append('_fields[]', 'Start Date (YYYY-mm-dd)');
    apiUrl.searchParams.append('_fields[]', 'End Date (YYYY-mm-dd)');
    apiUrl.searchParams.append('_fields[]', 'URL');
    //apiUrl.searchParams.append('_fields[]', '_embedded.wp:featuredmedia.0.media_details');
    //apiUrl.searchParams.append('_fields[]', '_links.wp:featuredmedia');
    //apiUrl.searchParams.append('_embed', 'wp:featuredmedia');
    return apiUrl.toString();
  }

  function buildCampFromRestResponse(camp){
    const name = camp.title.rendered;
    const start = new Date(camp['Start Date (YYYY-mm-dd)'] * 1000);
    const end = camp['End Date (YYYY-mm-dd)'] === '' ? start : new Date(camp['End Date (YYYY-mm-dd)'] * 1000);
    const isContinental = [
      'WordCamp San Francisco',
      'WordCamp US',
      'WordCamp Europe',
      'WordCamp Asia',
    ].includes(name);
    let emoji = '';
    if(name.includes('WordCamp US') || name.includes('WordCamp San Francisco')){
      emoji = '🌎';
    }
    if(name.includes('WordCamp Europe')){
      emoji = '🌍';
    }
    if(name.includes('WordCamp Asia')){
      emoji = '🌏';
    }
    return {
      id: camp.id,
      name,
      image: (camp._embedded && camp._embedded['wp:featuredmedia'][0].media_details.sizes['wccentral-thumbnail-small']) ? camp._embedded['wp:featuredmedia'][0].media_details.sizes['wccentral-thumbnail-small'].source_url : '',
      emoji,
      url: camp.URL,
      start: start,
      end: end,
      isInFuture: end > new Date(),
      isContinental,
    }
  }

  function maybeCutoffDate(camp){
    if(this.showOlder){
      return true;
    }
    const today = new Date();
    const cutOffDate = (new Date()).setMonth(today.getMonth() - 4);
    return camp.end > cutOffDate;
  }

  async function loadWordCamps() {
    const requests = [];
    const pagesToShow = this.showOlder ? 12 : 1;
    for (let i = 1; i <= pagesToShow; i++) {
        requests.push(fetch(buildWordCampUrl(i)).then(json => json.json()))
    }

    const camps = await Promise.all(requests);

    const loadedWordCamps = camps.flat(1).map(buildCampFromRestResponse)
        // Filter missing URLs
        .filter(camp => camp.url)
        // Filter broken dates
        .filter(camp => camp.start.getTime() !== (new Date(0)).getTime() )
        .filter((camp) => maybeCutoffDate.call(this, camp))
        .sort(sortByStart);

    this.loadedWordCamps = loadedWordCamps;

    console.table(loadedWordCamps, ['name', 'id',]);

    loadWordCampsFromQuery.call(this, loadedWordCamps);
  }

  function sortByStart(a, b){
    if (a.start < b.start) {
      return -1;
    }
    if (a.start > b.start) {
      return 1;
    }
    return 0;
  }

  function loadWordCampsFromQuery(loadedWordCamps){
    const initialWordCampIds = new URLSearchParams(window.location.search).getAll('wordcamp_id');
    const loadedWordCampIds = loadedWordCamps.map(wordcamp => parseInt(wordcamp.id, 10).toString());

    let loadWordCamps = false;
    initialWordCampIds.forEach((id) => {
      if(loadedWordCampIds.includes(id)){
        this.selectedWordCamps.push(id);
        loadWordCamps = true;
      }
    });
    if(loadWordCamps){
      document.getElementById('step-1').scrollIntoView();
      this.loadAttendees(true);
    }
  }

  function grabAttendeesFromHtml(html){
    const template = document.createElement('template');
    template.innerHTML = html;

    const attendees = template.content.querySelectorAll('.tix-attendee-list li');
    const attendeeObjects = Array.prototype.map.call(attendees, (el) => {
      const src = el.querySelector('.avatar').src;
      const regex = /avatar\/(.*)\?/;
      const hash = src.match(regex)[1];
      return {
        first: el.querySelector('.tix-first').textContent || '',
        last: el.querySelector('.tix-last').textContent || '',
        hash
      }
    });

    attendeeObjects.sort((a, b) => {
      if (a.first <  b.first) {
        return -1;
      }
      if (a.first >  b.first) {
        return 1;
      }

      if (a.last <  b.last) {
        return -1;
      }
      if (a.last >  b.last) {
        return 1;
      }

      return 0;
    });

    const seen = new Set();
    return attendeeObjects.filter(el => {
      const serializedObject = JSON.stringify(el);
      const duplicate = seen.has(serializedObject);
      seen.add(serializedObject);
      return !duplicate;
    });
  }

  async function attendees(camp) {
    const apiUrl = new URL('wp-json/wp/v2/pages', camp.url);
    apiUrl.searchParams.append('_fields[]', 'content.rendered');
    if(window.location.hostname === 'localhost') apiUrl.searchParams.append('_fields[]', 'link');
    apiUrl.searchParams.append('search', 'camptix_attendees');
    const attendeePageSearchApiUrl = apiUrl.toString();
    const attendeePageSearchApiResponse = await fetch(attendeePageSearchApiUrl);
    const attendeePageSearchApiResponseJson = await attendeePageSearchApiResponse.json();

    if(attendeePageSearchApiResponseJson.message === 'The REST API is not available while the site is in Coming Soon mode.'){
      return false;
    }

    if(Array.isArray(attendeePageSearchApiResponseJson) && attendeePageSearchApiResponseJson.length > 0){

      let attendees = false;

      if(window.location.hostname === 'localhost') console.group(camp.name);

      attendeePageSearchApiResponseJson.forEach((page)=>{
        const potentialAttendees = grabAttendeesFromHtml(page.content.rendered.trim());
        if(!attendees || potentialAttendees.length > attendees.length){
          attendees = potentialAttendees;
        }
        if(window.location.hostname === 'localhost') console.group(page.link);
        if(window.location.hostname === 'localhost') console.log(potentialAttendees.length + ' attendees');
        if(window.location.hostname === 'localhost') console.groupEnd();
      })

      if(window.location.hostname === 'localhost') console.groupEnd();

      return attendees;
    }

    return false;
  }

  document.addEventListener('alpine:init', () => {

    const initialWordCampSearch = new URLSearchParams(window.location.search).get('wordcamp');
    const initialAttendeeSearch = new URLSearchParams(window.location.search).get('attendee');
    const showOlder = new URLSearchParams(window.location.search).has('showOlder');

    Alpine.data('friendfinder', () => ({

      init(){

        this.$watch('selectedWordCamps', (selectedWordCamps) => {
          const searchParams = new URLSearchParams(new URL(document.location.toString()).searchParams);
          searchParams.delete('wordcamp_id');
          selectedWordCamps.forEach((campId) => {
            searchParams.append('wordcamp_id', campId);
          });
          searchParams.sort();
          history.replaceState(null, null, "?" + searchParams.toString());
        });

        this.$watch('wordcamp', (wordcamp) => {
          const searchParams = new URLSearchParams(new URL(document.location.toString()).searchParams);
          if(wordcamp === ''){
            searchParams.delete('wordcamp');
          }else{
            searchParams.set('wordcamp', wordcamp);
          }
          searchParams.sort();
          history.replaceState(null, null, "?" + searchParams.toString());
        });

        this.$watch('search', (search) => {
          const searchParams = new URLSearchParams(new URL(document.location.toString()).searchParams);
          if(search === ''){
            searchParams.delete('attendee');
          }else{
            searchParams.set('attendee', search);
          }
          searchParams.sort();
          history.replaceState(null, null, "?" + searchParams.toString());
        });
      },

      wordcamp: initialWordCampSearch ? initialWordCampSearch : '',
      search: initialAttendeeSearch ? initialAttendeeSearch : '',
      showOlder: !!showOlder,

      // Step 1
      camps: loadWordCamps,
      loadedWordCamps: [],
      get pastCamps(){
        return this.loadedWordCamps.filter(camp => {
          return !camp.isInFuture && (this.wordcamp === '' || camp.name.toLowerCase().includes(this.wordcamp.toLowerCase()));
        })
      },
      get futureCamps(){
        return this.loadedWordCamps.filter(camp => {
          return camp.isInFuture && (this.wordcamp === '' || camp.name.toLowerCase().includes(this.wordcamp.toLowerCase()));
        })
      },
      selectedWordCamps: [],

      // Step 2
      cachedAttendeesForCamps:[],
      loadAttendees(shouldScroll){
        this.loadedWordCamps.forEach(camp => {
          if(
              // Camp not selected
              !this.selectedWordCamps.includes(camp.id.toString())
              ||
              // Camp already cached
              this.cachedAttendeesForCamps.find(cachedCamp => cachedCamp.id === camp.id)
          ){
            return;
          }
          attendees(camp).then(attendees => {
            if(!this.cachedAttendeesForCamps.find(cachedCamp => cachedCamp.id === camp.id)){
              camp.attendees = attendees;
              this.cachedAttendeesForCamps.push(camp);
              this.cachedAttendeesForCamps.sort(sortByStart);

              if(shouldScroll === true){
                setTimeout(() => {
                  document.getElementById('step-2').scrollIntoView();
                });
              }

            }
          });
        });
      },
      get attendeesForCamps(){
        return this.cachedAttendeesForCamps.filter(camp => this.selectedWordCamps.includes(camp.id.toString()));
      },
      filterForSearch(attendees, search){
        if(search === ''){
          return attendees;
        }
        return attendees.filter(attendee => {
          const tokens = search.toLowerCase().split(' ').filter(token => token.trim() !== '');
          if(tokens.length === 0){
            return true;
          }
          const name = attendee.first.toLowerCase() + ' ' + attendee.last.toLowerCase();
          const containsAllTokensInString = tokens.reduce(
              (contains, token) => {
                if(!name.includes(token)){
                  return false;
                }
                return contains;
              },
              true
          );
          if(containsAllTokensInString){
            return true;
          }
          if(!search.includes('@') || !search.includes('.')){
            return false;
          }
          console.log(CryptoJS.MD5(search).toString());
          return CryptoJS.MD5(search).toString() === attendee.hash;
        })
      }

    }))

    console.log('So, you are looking under the hood? Great!');
    console.log('There are some more advanced ways to use this tool by creating direct links with query arguments:');
    const base = window.location.origin + window.location.pathname;
    console.table([
      { name: 'wordcamp_id', type: 'int', description: 'Pre-select one or more WordCamps and load the corresponding attendees. You can get the IDs from the table you should see in the console below this.', example: base + '?wordcamp_id=8692144&wordcamp_id=3043982'},
      { name: 'wordcamp', type: 'string', description: 'Pre-fill the WordCamp filter with a string.', example: base + '?wordcamp=Europe'},
      { name: 'attendee', type: 'string', description: 'Pre-fill the Attendee filter with a string.', example: base + '?attendee=Doe'},
      { name: 'showOlder', type: 'bool', description: 'Load more past WordCamps, up to 100 in total.', example: base + '?showOlder'},
    ])
    console.log('Here is an example for everything together:');
    console.log(base + '?wordcamp=Vienna&wordcamp_id=8692144&wordcamp_id=3043982&attendee=Kr%C3%A4ftner&showOlder=');
  })

})();
