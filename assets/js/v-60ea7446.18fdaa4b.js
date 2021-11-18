"use strict";(self.webpackChunkios_cfw_guide=self.webpackChunkios_cfw_guide||[]).push([[7433],{49248:(e,i,o)=>{o.r(i),o.d(i,{data:()=>n});const n={key:"v-60ea7446",path:"/using-odysseyn1x-a9x/",title:"Using Odysseyn1x (A9X)",lang:"en_US",frontmatter:{lang:"en_US",title:"Using Odysseyn1x (A9X)",description:"Guide to installing checkra1n via Odysseyn1x on A9X devices",permalink:"/using-odysseyn1x-a9x"},excerpt:"",headers:[{level:2,title:"Requirements",slug:"requirements",children:[]},{level:2,title:"Flashing Odysseyn1x",slug:"flashing-odysseyn1x",children:[]},{level:2,title:"Running checkra1n",slug:"running-checkra1n",children:[]},{level:2,title:"The Odysseyra1n script",slug:"the-odysseyra1n-script",children:[]},{level:2,title:"Installing packages",slug:"installing-packages",children:[]}],filePathRelative:"en_US/jailbreak/checkra1n/using-odysseyn1x-a9x/index.md",git:{updatedTime:1635435571e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:3}]}}},77681:(e,i,o)=>{o.r(i),o.d(i,{default:()=>T});var n=o(66252);const t=(0,n._)("div",{class:"custom-container warning"},[(0,n._)("p",{class:"custom-container-title"},"WARNING"),(0,n._)("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1),l=(0,n.Uk)("Odysseyra1n is a "),a=(0,n.Uk)("semi-tethered jailbreak"),s=(0,n.Uk)(", meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more."),r=(0,n.uE)('<p>Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking millions of iOS devices with A7 to A11 SoC&#39;s on firmwares 12.0 to 14.8.1.</p><p>After installing checkra1n, we&#39;ll be using a script to install Odysseyra1n. This replaces important parts of the jailbreak with modern and fast alternatives.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you are using an A9X device running iOS 14.4.2 or earlier, you should follow <a href="installing-odysseyra1n">Installing Odysseyra1n</a> and use checkra1n version 0.12.2 instead.</p></div><p>On A9X devices, it is not possible to use Odysseyn1x 2.14 (required for 14.5+ support) without the use of a custom pongoOS and checkra1n in CLI mode. It is possible to use a custom version of Odysseyn1x, however, to work around this.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2>',5),u=(0,n._)("li",null,"256MB or greater USB Drive",-1),c=(0,n.Uk)("The latest version of "),d={href:"https://github.com/asdfugil/checkn1x_a9x_kerninfo_pongoOS/releases/tag/14.5-a9x-2",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("Odysseyn1x for A9X"),y=(0,n._)("ul",null,[(0,n._)("li",null,'For 64-bit computers, download the "AMD64" version'),(0,n._)("li",null,'For 32-bit computers, download the "i686" version')],-1),p={href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("balenaEtcher"),m=(0,n.uE)('<p><img src="/assets/images/Odysseyn1x.png" alt="A screenshot of the Odysseyn1x menu"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you&#39;re migrating from unc0ver to to Odysseyra1n, you must follow <a href="removing-unc0ver">Removing unc0ver</a> before proceeding.</p></div><h2 id="flashing-odysseyn1x" tabindex="-1"><a class="header-anchor" href="#flashing-odysseyn1x" aria-hidden="true">#</a> Flashing Odysseyn1x</h2><ol><li>Download and install balenaEtcher</li><li>Click <code>Flash from file</code></li><li>Select the odysseyn1x <code>.iso</code> file</li><li>Click <code>Select target</code></li><li>Select the USB drive you would like to boot from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Click <code>Flash!</code><ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once the flashing has completed, reboot your computer</li><li>Go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li></ol><h2 id="running-checkra1n" tabindex="-1"><a class="header-anchor" href="#running-checkra1n" aria-hidden="true">#</a> Running checkra1n</h2>',5),f=(0,n._)("li",null,[(0,n.Uk)("Once you have loaded odysseyn1x, select "),(0,n._)("code",null,"checkra1n (A9X)")],-1),k=(0,n.Uk)("You will now be presented with instructions in how to reboot your device into "),b=(0,n.Uk)("DFU mode"),v=(0,n.Uk)(", click "),w=(0,n._)("code",null,"Start",-1),_=(0,n.Uk)(" to begin "),x=(0,n._)("ul",null,[(0,n._)("li",null,"Follow the instructions until your device reboots to a black screen")],-1),O=(0,n._)("li",null,"Once your device boots, you can quit checkra1n, but do not shut down your computer",-1),S=(0,n.uE)('<h2 id="the-odysseyra1n-script" tabindex="-1"><a class="header-anchor" href="#the-odysseyra1n-script" aria-hidden="true">#</a> The Odysseyra1n script</h2><p>The following steps only need to be performed once and are optional but highly recommended for a smoother experience and modern bootstrap.</p><ol><li>Unlock your device</li><li>Ensure that your computer is trusted by your device</li><li>Select <code>Odysseyra1n</code> in Odysseyn1x</li><li>Sileo should install to your device</li><li>Do not close Odysseyn1x as you will need to re-jailbreak in a few minutes</li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>After installing Odysseyra1n, <strong>do not</strong> install Cydia from the Loader app.</p></div>',4),U=(0,n.Uk)("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),q=(0,n.Uk)("tweaks"),A=(0,n.Uk)(", themes, packages and more."),I=(0,n.uE)('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3),C={},T=(0,o(83744).Z)(C,[["render",function(e,i){const o=(0,n.up)("RouterLink"),C=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[t,(0,n._)("p",null,[l,(0,n.Wm)(o,{to:"/types-of-jailbreak/#semi-tethered-jailbreaks"},{default:(0,n.w5)((()=>[a])),_:1}),s]),r,(0,n._)("ul",null,[u,(0,n._)("li",null,[c,(0,n._)("a",d,[h,(0,n.Wm)(C)]),y]),(0,n._)("li",null,[(0,n._)("a",p,[g,(0,n.Wm)(C)])])]),m,(0,n._)("ol",null,[f,(0,n._)("li",null,[k,(0,n.Wm)(o,{to:"/faq/#what-is-dfu-mode"},{default:(0,n.w5)((()=>[b])),_:1}),v,w,_,x]),O]),S,(0,n._)("p",null,[U,(0,n.Wm)(o,{to:"/faq/#what-are-tweaks"},{default:(0,n.w5)((()=>[q])),_:1}),A]),I],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{const o=e.__vccOpts||e;for(const[e,n]of i)o[e]=n;return o}}}]);