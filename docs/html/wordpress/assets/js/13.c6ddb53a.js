(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{215:function(e,s,t){"use strict";t.r(s);var r=t(0),o=Object(r.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"more"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more","aria-hidden":"true"}},[e._v("#")]),e._v(" More")]),e._v(" "),t("p",[e._v("Each of the following solutions has been proven to be effective and we hope to be helpful to you.")]),e._v(" "),t("h2",{attrs:{id:"domain-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#domain-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" Domain binding")]),e._v(" "),t("p",[e._v("The precondition for "),t("strong",[e._v("Domain binding")]),e._v(" is have completed the "),t("strong",[e._v("Domain resolution")]),e._v(" for WordPress Instance.")]),e._v(" "),t("p",[e._v("From the perspective of server security and subsequent maintenance considerations, the "),t("strong",[e._v("Domain Binding")]),e._v(" step cannot be omitted.")]),e._v(" "),t("p",[e._v("WordPress domain name binding steps:")]),e._v(" "),t("ol",[t("li",[e._v("Connect your Cloud Server")]),e._v(" "),t("li",[e._v("Modify "),t("router-link",{attrs:{to:"/stack-components.html#apache"}},[e._v("vhost configuration file")]),e._v(", change the domain name item for you"),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('#### WordPress(LAMP) bind domain #### \n\n  <VirtualHost *:80>\n  ServerName www.mydomain.com # modify it for you\n  DocumentRoot "/data/wwwroot/wordpress"\n  ...\n  \n#### WordPress(LNMP) bind domain #### \n\n  server {\n   listen 80;\n   server_name    wordpress.example.com; # modify it for you\n  ...\n\n')])])])],1),e._v(" "),t("li",[e._v("Save it and restart "),t("router-link",{attrs:{to:"/admin-services.html#apache"}},[e._v("Web Service")])],1)]),e._v(" "),t("h2",{attrs:{id:"change-domain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-domain","aria-hidden":"true"}},[e._v("#")]),e._v(" Change Domain")]),e._v(" "),t("p",[e._v("The correct way to change the domain name is as follows")]),e._v(" "),t("ol",[t("li",[e._v("Go to Domain Console, complete Domain resolution")]),e._v(" "),t("li",[e._v("Connect Cloud Server, complete the Domain binding\n"),t("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/wordpress/wordpress-changeurl-websoft9.png",alt:"Wordpress modify URL"}})]),e._v(" "),t("li",[e._v("Save it")])]),e._v(" "),t("blockquote",[t("p",[e._v("Some resource may remain the old domain URL after changing, you should modify them one by one")])]),e._v(" "),t("h2",{attrs:{id:"manage-wordpress-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-wordpress-password","aria-hidden":"true"}},[e._v("#")]),e._v(" Manage WordPress Password")]),e._v(" "),t("p",[e._v("We may "),t("strong",[e._v("Modify")]),e._v(" or "),t("strong",[e._v("recover")]),e._v(" WordPress administrator password")]),e._v(" "),t("h3",{attrs:{id:"modify-wordpress-administrator-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modify-wordpress-administrator-password","aria-hidden":"true"}},[e._v("#")]),e._v(" Modify WordPress administrator password")]),e._v(" "),t("p",[e._v("Log in Wordpress, go to Users->Your Profile,update your password\n"),t("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/wordpress/wordpress-modifypw-websoft9.png",alt:"Wordpress Modify WordPress administrator password"}})]),e._v(" "),t("h3",{attrs:{id:"recover-wordpress-administrator-password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recover-wordpress-administrator-password","aria-hidden":"true"}},[e._v("#")]),e._v(" Recover WordPress administrator password")]),e._v(" "),t("p",[e._v("If you don't remember the WordPress administrator password, you can retrieve it in the following two ways.")]),e._v(" "),t("h4",{attrs:{id:"recover-by-email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recover-by-email","aria-hidden":"true"}},[e._v("#")]),e._v(" Recover by Email")]),e._v(" "),t("p",[e._v("WordPress can retrieve the password by sending an email, but only if your WordPress site has already configured SMTP.\n"),t("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/wordpress/wordpress-forgetpw-websoft9.png",alt:"Wordpress Modify WordPress administrator password"}})]),e._v(" "),t("h4",{attrs:{id:"recover-by-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recover-by-database","aria-hidden":"true"}},[e._v("#")]),e._v(" Recover by database")]),e._v(" "),t("p",[e._v("If the server does not support the function of sending email passwords, the database management panel phpmyadmin will modify it.")]),e._v(" "),t("ol",[t("li",[e._v("Log in to phpMyAdmin, find the "),t("em",[e._v("wp_user")]),e._v(" table of your WordPress database\n"),t("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/wordpress/wordpress-wpusers-websoft9.png",alt:"Wordpress database"}})]),e._v(" "),t("li",[e._v("Edit the user(e.g. your username is "),t("code",[e._v("admin")]),e._v(")"),t("br"),e._v(" "),t("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/wordpress/wordpress-wpuserspw-websoft9.png",alt:"Wordpress database"}})]),e._v(" "),t("li",[e._v("Replace the data with "),t("code",[e._v("21232f297a57a5a743894a0e4a801fc3")]),e._v("(MD5)")]),e._v(" "),t("li",[e._v("Click "),t("strong",[e._v("run")])]),e._v(" "),t("li",[e._v("The new password is "),t("code",[e._v("admin")]),e._v(" now")])]),e._v(" "),t("h2",{attrs:{id:"wordpress-file-type-limit-extend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wordpress-file-type-limit-extend","aria-hidden":"true"}},[e._v("#")]),e._v(" WordPress File type limit extend")]),e._v(" "),t("p",[e._v("WordPress supports uploading of most image formats such as images by default, but some file formats are not supported. According to personal needs, we need to add some formats. Of course, some formats can be prohibited from being uploaded.")]),e._v(" "),t("ol",[t("li",[e._v("Edit "),t("code",[e._v("function.php")]),e._v(" file on your Theme directory")]),e._v(" "),t("li",[e._v("Copy the code section to functions.php file")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function edit_upload_types($existing_mimes = array()) {\n\n// Allowed file types to upload\n$existing_mimes['woff'] = 'application/woff';\n$existing_mimes['rar'] = 'application/rar';\n\n// To add more file type support, add code later.\n\n// File types that are not allowed to be uploaded\nunset( $existing_mimes['jpg'] );\n\nreturn $existing_mimes;\n}\nadd_filter('upload_mimes', 'edit_upload_types');\n")])])]),t("h2",{attrs:{id:"wordpress-using-object-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wordpress-using-object-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" WordPress Using object storage")]),e._v(" "),t("p",[e._v("When WordPress has more than 500 images, it is recommended to store the images in the object storage (generally called OSS).")]),e._v(" "),t("p",[e._v("There are two ways for WordPress to use OSS. The first is to upload files through the OSS client and then call them in WordPress. The second is to integrate OSS with WordPress, and the files uploaded through the WordPress background are automatically stored in OSS.")]),e._v(" "),t("h3",{attrs:{id:"manually-upload-files-to-oss-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually-upload-files-to-oss-recommended","aria-hidden":"true"}},[e._v("#")]),e._v(" Manually upload files to OSS (recommended)")]),e._v(" "),t("ol",[t("li",[e._v("Upload your images to OSS by the OSS management tool")]),e._v(" "),t("li",[e._v("Configue domain for your images folder")]),e._v(" "),t("li",[e._v("Get your image URL from OSS like below"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("https://libs.websoft9.com/Websoft9/DocsPicture/zh/wordpress/wordpress-product-screenshot.png\n")])])])]),e._v(" "),t("li",[e._v("Go to Wordpress backend -> Edit pag ->， insert the image URL\n"),t("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/wordpress/wordpress-insertfromurl-websoft9.png",alt:""}})])]),e._v(" "),t("h3",{attrs:{id:"wordpress-integration-with-oss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wordpress-integration-with-oss","aria-hidden":"true"}},[e._v("#")]),e._v(" WordPress integration with OSS")]),e._v(" "),t("ol",[t("li",[e._v("Mount OSS to WordPress's wp-upload folder")]),e._v(" "),t("li",[e._v("Every time a file uploaded via WordPress is automatically stored in OSS")])]),e._v(" "),t("blockquote",[t("p",[e._v("The operation of mounting OSS is complicated and requires user independent research.")])]),e._v(" "),t("h2",{attrs:{id:"wordpress-10-major-points"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wordpress-10-major-points","aria-hidden":"true"}},[e._v("#")]),e._v(" WordPress 10 major points")]),e._v(" "),t("p",[e._v("In order to make WordPress run more efficiently, easy to maintain, and easy to migrate, we have summarized 10 key points that WordPress administrators and content managers need to pay attention to in practice:")]),e._v(" "),t("ol",[t("li",[e._v("Upload pictures as far as possible no more than 100k/sheet")]),e._v(" "),t("li",[e._v("If the total number of pictures exceeds 500, it is recommended to put the picture in the object storage to achieve dynamic separation and easy maintenance.")]),e._v(" "),t("li",[e._v("All picture names are in English")]),e._v(" "),t("li",[e._v("The image size ratio of the news is preferably 600:400 to ensure uniformity. Each news must be accompanied by pictures, beautiful and easy to display.")]),e._v(" "),t("li",[e._v("All pages and news URL addresses are in English")]),e._v(" "),t("li",[e._v("The password of the background account is more complicated.")]),e._v(" "),t("li",[e._v("Carousel Banner no more than 3")]),e._v(" "),t("li",[e._v("The number of plugins does not exceed 20, and the plugins that are not used must be uninstalled to avoid the conflict of plugins and the website is unavailable.")]),e._v(" "),t("li",[e._v("The content of the website is king. Please concentrate on the update of the content and the establishment of the knowledge base.")]),e._v(" "),t("li",[e._v("Please put large files such as video in other storage.")])]),e._v(" "),t("h2",{attrs:{id:"add-new-wordpress-site"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-new-wordpress-site","aria-hidden":"true"}},[e._v("#")]),e._v(" Add new WordPress site")]),e._v(" "),t("p",[e._v("Websoft9 Wordpress stack supports the deployment of multiple applications (websites), but different environments have different operating methods.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/solution-deployment.html#deploy-second-application",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add new site on Wordpress on LAMP"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://support.websoft9.com/docs/lnmp/solution-deployment.html#deploy-second-application",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add new site on Wordpress on LEMP"),t("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=o.exports}}]);