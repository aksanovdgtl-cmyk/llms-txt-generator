(function(){
var pairs=[["\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 llms.txt \u0432 \u043a\u043e\u0440\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.","Create llms.txt in the site root."],["llms.txt \u0434\u0430\u0435\u0442 AI-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0443\u044e \u043a\u0430\u0440\u0442\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0430: \u0447\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0438 \u043a\u0430\u043a\u0438\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0442\u043e\u0438\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c.","llms.txt gives AI systems a short map of the project: what the company does and which pages to read first."],["llms.txt - \u0444\u0430\u0439\u043b-\u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u0434\u043b\u044f \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439. \u0427\u0435\u043c \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 robots.txt, \u043d\u0443\u0436\u0435\u043d \u043b\u0438 \u0432\u0430\u0448\u0435\u043c\u0443 \u0441\u0430\u0439\u0442\u0443, \u043a\u0430\u043a \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c.","A practical introduction to llms.txt, robots.txt, and file structure."],["\u041d\u0435\u0442. \u042d\u0442\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438, \u0430 \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c.","No. It helps most on sites with documentation, services, or a large content section, where important pages are hard to find by crawling."],["\u041d\u0435\u0442. \u041e\u043d \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0438\u043b\u0438 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043b, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0435\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0441\u0430\u0439\u0442\u0430.","No. It builds and validates the file. Publishing happens on your side."],["\u0424\u0430\u0439\u043b \u043d\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 sitemap.xml, robots.txt \u0438 \u0445\u043e\u0440\u043e\u0448\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0441\u0430\u0439\u0442\u0430. \u041e\u043d \u0434\u043e\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0438\u0445.","The file does not replace sitemap.xml, robots.txt, or a sound site structure. It sits alongside them."],["\u041b\u0443\u0447\u0448\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u044b \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u043e\u0447\u043d\u043e \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u044e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442.","You can, but a long list dilutes the signal. Keep it to the pages you want cited."],["\u0427\u0435\u0442\u044b\u0440\u0435 \u0443\u0440\u043e\u0432\u043d\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043b\u0438\u044f\u044e\u0442 \u043d\u0430 \u043f\u043e\u043d\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0444\u0430\u0439\u043b\u0430 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0445 \u0438 AI-\u0441\u0438\u0441\u0442\u0435\u043c.","Four areas that decide how readable the file is for search engines and AI systems."],["\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0447\u0435\u0442\u044b\u0440\u0435 \u043f\u043e\u043b\u044f - \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0438 \u0433\u043e\u0442\u043e\u0432\u044b\u0439 Markdown.","Fill in four fields and the tool returns a structure and a ready markdown file."],["\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0444\u0430\u0439\u043b, \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0438 \u0441\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u0439 llms.txt \u0434\u043b\u044f \u0441\u0430\u0439\u0442\u0430.","Check the file, find the errors, and build a ready llms.txt for your site."],["\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u0444\u0430\u0439\u043b\u0430 \u0432 \u043a\u043e\u0440\u043d\u0435 \u0441\u0430\u0439\u0442\u0430, \u043a\u043e\u0434 \u043e\u0442\u0432\u0435\u0442\u0430 \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u0438\u043f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e.","Whether the file sits in the site root, what status code it returns, and whether the content type is correct."],["\u0412 \u043a\u043e\u0440\u0435\u043d\u044c \u0434\u043e\u043c\u0435\u043d\u0430, \u0447\u0442\u043e\u0431\u044b \u0444\u0430\u0439\u043b \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u043b\u0441\u044f \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 site.kz/llms.txt.","In the root of the domain, at /llms.txt. On website builders without root access, serve it through a proxy or an edge worker."],["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435, \u0440\u0430\u0437\u0434\u0435\u043b\u044b \u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 Markdown.","Project name, description, sections, and markdown formatting."],["GEO, AEO \u0438 SEO-\u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435 \u0431\u0438\u0437\u043d\u0435\u0441\u0430 \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435 \u0438 \u0423\u0437\u0431\u0435\u043a\u0438\u0441\u0442\u0430\u043d\u0435.","GEO, AEO, and SEO for businesses in Kazakhstan and Uzbekistan."],["\u041f\u043e\u043d\u044f\u0442\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0438 \u0432\u044b\u0431\u043e\u0440 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u0430\u0436\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446.","Whether the site description is clear and whether the listed pages are the ones that matter."],["\u0410\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0435 URL, \u0434\u0443\u0431\u043b\u0438, \u043f\u043e\u0434\u043e\u0437\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u043e\u0431\u044a\u0435\u043c \u0441\u043f\u0438\u0441\u043a\u0430.","Absolute URLs, duplicates, suspicious addresses, and list size."],["\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u0444\u0430\u0439\u043b, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443, \u0441\u0441\u044b\u043b\u043a\u0438 \u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438.","We load the file and look at its structure, links, and the main things worth fixing."],["\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u044c \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430.","A short description explains what the site is for."],["\u041f\u043e\u0441\u043b\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u044b.","After publication, we will check headings and sections."],["\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.","Check the site URL and try again."],["\u0412 \u0444\u0430\u0439\u043b\u0435 \u0435\u0441\u0442\u044c \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.","The file includes absolute page URLs."],["\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0438 \u0441\u0441\u044b\u043b\u043a\u0438.","Checking availability, structure, and links."],["\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u0444\u0430\u0439\u043b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438?","Does the tool publish the file for me"],["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.","Add links to key pages."],["\u041e\u0434\u0438\u043d \u0444\u0430\u0439\u043b \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0431\u0445\u043e\u0434\u0430 \u0432\u0441\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430","A short map of the site for AI systems"],["\u041c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0430\u0439\u0442\u0430?","Can I list every page"],["\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b \u0431\u0435\u0437 \u0440\u0443\u0447\u043d\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438","Build the file without writing markdown"],["\u0412\u0430\u0436\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435","Key pages, one per line"],["llms.txt: \u0447\u0442\u043e \u044d\u0442\u043e \u0438 \u043a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","What llms.txt is and how it works"],["\u0415\u0441\u0442\u044c \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u044b.","The file has a main heading and sections."],["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430.","Add a short site description."],["\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043f\u0435\u0440\u0435\u0434 \u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435\u043c","Preview before you download"],["llms.txt \u043d\u0430\u0439\u0434\u0435\u043d \u0432 \u043a\u043e\u0440\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.","llms.txt was found in the site root."],["\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 llms.txt","llms.txt checker and generator"],["\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f AI-\u043a\u0440\u0430\u0443\u043b\u0435\u0440\u043e\u0432","Check AI crawler access"],["\u041d\u0438\u0436\u0435 - \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0438 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f.","The structure and notes are below."],["\u042d\u0442\u043e \u0437\u0430\u0439\u043c\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434.","This takes a few seconds."],["\u041d\u0443\u0436\u0435\u043d \u043b\u0438 \u0444\u0430\u0439\u043b \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0443?","Does every site need one"],["\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442 \u043e\u0441\u043d\u043e\u0432\u0443.","The generator will prepare a starting point."],["\u0411\u0415\u0421\u041f\u041b\u0410\u0422\u041d\u042b\u0419 \u0418\u041d\u0421\u0422\u0420\u0423\u041c\u0415\u041d\u0422 \u00b7 GEO","FREE TOOL \u00b7 GEO"],["\u041a\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430 \u0434\u043b\u044f \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439","A site map for AI systems"],["\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c GEO-\u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435","GEO services"],["\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438","Structure follows the spec"],["\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u0431\u0440\u0435\u043d\u0434\u0430","Check your brand entity"],["\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0430\u0439\u0442","We could not check the site"],["\u0421\u0430\u0439\u0442 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c","The site could not be checked"],["\u0427\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442","What the tool checks"],["\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0434\u043d\u0438\u043c \u043a\u043b\u0438\u043a\u043e\u043c","One-click copy"],["\u041a\u0443\u0434\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c llms.txt?","Where do I upload llms.txt"],["\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u0441\u0430\u0439\u0442\u0430.","Collecting data from the site."],["\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430","Short site description"],["https://site.kz/service","https://example.com/service"],["\u0424\u0430\u0439\u043b \u0433\u043e\u0442\u043e\u0432 \u043a \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438","File ready to publish"],["\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438","No data to check"],["/geo | GEO-\u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435","/service | Service"],["/aeo | AEO-\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f","/about | About"],["/seo | SEO-\u043f\u0440\u043e\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435","/resources | Resources"],["\u0412\u041e\u041f\u0420\u041e\u0421\u042b \u041e\u0411 \u0418\u041d\u0421\u0422\u0420\u0423\u041c\u0415\u041d\u0422\u0415","QUESTIONS ABOUT THE TOOL"],["\u041d\u0443\u0436\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430","Need systematic work"],["\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c llms.txt","You need to create llms.txt"],["\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Copy failed"],["https://site.kz/blog","https://example.com/blog"],["\u0424\u0430\u0439\u043b \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u0441 \u043a\u043e\u0434\u043e\u043c","The file returned status"],["\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443","Keep checking"],["\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0447\u0430\u043b\u043e\u0441\u044c","Download started"],["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","Description not found"],["\u0420\u0415\u0417\u0423\u041b\u042c\u0422\u0410\u0422 \u041f\u0420\u041e\u0412\u0415\u0420\u041a\u0418","CHECK RESULT"],["\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c llms.txt","Loading llms.txt"],["\u0413\u0415\u041d\u0415\u0420\u0410\u0422\u041e\u0420 LLMS.TXT","LLMS.TXT GENERATOR"],["LLMS.TXT \u00b7 \u041f\u0420\u0418\u041d\u0426\u0418\u041f","LLMS.TXT \u00b7 THE IDEA"],["\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c llms.txt","Loading llms.txt"],["\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f","The structure is readable"],["\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","Short description"],["/blog | \u0411\u043b\u043e\u0433 HITZ","/blog | Blog"],["\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0430\u0439\u043b","Generate file"],["\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b","Key pages"],["llms.txt \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d","llms.txt is available"],["\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b","No links found"],["\u0420\u0435\u0436\u0438\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430","Tool mode"],["\u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435","one per line"],["\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441 \u0434\u043e\u043c\u0435\u043d\u0430","Start with a domain"],["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430","Project name"],["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e","Description found"],["\u0412\u0441\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b","All tools"],["\u0424\u0430\u0439\u043b \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d","File copied"],["\u0412\u0430\u0436\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b","Key pages"],["\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0430\u0439\u0442","Check a site"],["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430","Site name"],["\u0420\u0410\u0417\u0411\u041e\u0420 \u0412 \u0411\u041b\u041e\u0413\u0415","BACKGROUND"],["\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0440\u0430\u0437\u0431\u043e\u0440","Open the guide"],["\u0424\u0430\u0439\u043b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d","File not found"],["\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430\u0439\u0434\u0435\u043d\u044b","Links found"],["\u0434\u043b\u044f \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439","for AI systems"],["\u0444\u0430\u0439\u043b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d","file not found"],["\u0424\u0430\u0439\u043b \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d","File available"],["\u0427\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e","Read the guide"],["\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433","NEXT STEP"],["\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Update the file"],["\u0424\u0430\u0439\u043b \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d","File available"],["\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b","Generate file"],["\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430","Site URL"],["\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c","Availability"],["\u0418\u041d\u0421\u0422\u0420\u0423\u041c\u0415\u041d\u0422\u042b","TOOLS"],["\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e","Copied"],["\u0424\u0430\u0439\u043b \u043d\u0430\u0439\u0434\u0435\u043d","File found"],["\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b","Tools"],["\u041a\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430","Site map"],["\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Content"],["\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Copy"],["\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u2026","Checking\u2026"],["\u041d\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0430","No response"],["\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c","Check"],["\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430","Structure"],["\u0427\u0442\u043e \u043d\u0430\u0448\u043b\u0438","What we found"],["\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c","Checking"],["\u041f\u043e \u0430\u0434\u0440\u0435\u0441\u0443","At"],["\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442","working"],["\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","Description"],["\u0421\u043e\u0437\u0434\u0430\u0442\u044c","Generate"],["\u0421\u043a\u0430\u0447\u0430\u0442\u044c","Download"],["\u0413\u043b\u0430\u0432\u043d\u0430\u044f","Home"],["\u0421\u0441\u044b\u043b\u043a\u0438","Links"],["\u0438\u0437 100","out of 100"],["\u0423\u0441\u043b\u0443\u0433\u0430","Service"],["\u0423\u0421\u041b\u0423\u0413\u0410","SERVICE"],["\u041e\u0448\u0438\u0431\u043a\u0430","Error"],["\u0414\u043e\u0441\u0442\u0443\u043f","Availability"],["\u0411\u043b\u043e\u0433","Blog"],["\u0415\u0441\u0442\u044c","Present"],["\u041d\u0435\u0442","Missing"]];
pairs=pairs.concat([["Маршрут не найден","Route not found"],["Метод не поддерживается","Method not supported"],["Источник запроса не разрешен","Request origin not allowed"],["Слишком много запросов. Попробуйте через минуту.","Too many requests. Try again in a minute."],["Сервис временно перегружен. Попробуйте через минуту.","The service is busy. Try again in a minute."],["Укажите адрес сайта","Enter the site URL"],["Укажите название бренда","Enter the brand name"],["Сайт отвечает слишком долго","The site takes too long to respond"],["Не удалось проверить сайт","We could not check the site"],["Не удалось загрузить llms.txt","Could not load llms.txt"],["Не удалось загрузить robots.txt","Could not load robots.txt"],["Не удалось загрузить главную страницу","Could not load the home page"],["Некорректный адрес сайта","Invalid site URL"],["Поддерживаются только http и https","Only http and https are supported"],["Адрес не должен содержать логин или пароль","The URL must not contain a username or password"],["Поддерживаются только стандартные веб-порты","Only standard web ports are supported"],["Укажите публичный домен сайта","Enter a public domain"],["Не удалось проверить адрес сайта","Could not verify the site address"],["robots.txt превышает допустимый размер","robots.txt exceeds the size limit"],["Слишком много перенаправлений","Too many redirects"],["Некорректное перенаправление","Invalid redirect"],["robots.txt вернул код","robots.txt returned status"],["Главная страница отвечает кодом","The home page returned status"],["Главная страница сайта недоступна или вернула не HTML","The home page is unavailable or did not return HTML"],["Страница отвечает кодом","The page returned status"],["По адресу открывается не HTML-страница","The URL does not return an HTML page"],["По адресу открывается пустая HTML-страница","The URL returns an empty HTML page"],["Проверка страниц недоступна на этом сервере","Page checks are not available on this server"],["Некорректный JSON-LD","Invalid JSON-LD"],["Запрещающих правил нет","No disallow rules"],["Сервер вернул ошибку","The server returned an error"],["Проверьте публикацию файла и ответ сервера.","Check that the file is published and how the server responds."],["Структуру стоит дополнить","The structure needs work"],["Нужны один H1 и разделы второго уровня.","The file needs one H1 and second-level sections."],["Добавьте строку описания после заголовка.","Add a description line after the heading."],["Добавьте абсолютные ссылки на ключевые страницы.","Add absolute links to key pages."],["Проверьте title, один H1, canonical, lang, viewport и запрет noindex.","Check the title, a single H1, canonical, lang, viewport, and noindex."],["База есть, но отдельные сигналы мешают странице стать надежным источником.","The base is there, but some signals keep the page from becoming a reliable source."],["Название бренда согласовано с основными элементами страницы.","The brand name matches the main elements of the page."],["Телефон и почта подтверждают организацию.","Phone and email confirm the organization."],["Официальные профили связаны с сайтом.","Official profiles are linked to the site."],["Сайт отвечает","The site responds"],["Используется HTTPS","HTTPS is used"],["Canonical ведет на основной домен","The canonical points to the primary domain"],["Бренд указан в title","The brand is in the title"],["Бренд указан в H1","The brand is in the H1"],["og:site_name совпадает с брендом","og:site_name matches the brand"],["Есть meta description","A meta description is present"],["Есть Organization или LocalBusiness","Organization or LocalBusiness markup is present"],["Название в разметке совпадает","The name in the markup matches"],["URL в разметке совпадает с доменом","The URL in the markup matches the domain"],["В разметке указан логотип","The markup includes a logo"],["В разметке есть sameAs","The markup includes sameAs"],["Связаны минимум два профиля","At least two profiles are linked"],["На сайте указана почта","The site lists an email"],["На сайте указан телефон","The site lists a phone number"],["В разметке есть contactPoint","The markup includes contactPoint"],["В разметке есть адрес","The markup includes an address"],["Бренд найден в Wikidata","The brand is found in Wikidata"]]).sort(function(a,b){return b[0].length-a[0].length});
function tr(value){var out=String(value==null?'':value);for(var i=0;i<pairs.length;i++)out=out.split(pairs[i][0]).join(pairs[i][1]);return out}
function walk(root){if(!root)return;if(root.nodeType===3){var next=tr(root.nodeValue);if(next!==root.nodeValue)root.nodeValue=next;return}if(root.nodeType!==1||/^(SCRIPT|STYLE)$/.test(root.tagName))return;['aria-label','title','placeholder'].forEach(function(a){if(root.hasAttribute(a))root.setAttribute(a,tr(root.getAttribute(a)))});for(var i=0;i<root.childNodes.length;i++)walk(root.childNodes[i])}
function start(){
  window.hitzEnTranslate=tr;
  walk(document.body);
  new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(walk);if(m.type==='characterData')walk(m.target)})}).observe(document.body,{childList:true,subtree:true,characterData:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const checkForm = $('#check-form');
const resultSection = $('#result');
const checksGrid = $('#checks-grid');
const scoreValue = $('#score-value');
const statusPill = $('#status-pill');
const statusTitle = $('#status-title');
const statusCopy = $('#status-copy');
const resultTitle = $('#result-title');
const resultCta = $('#result-cta');
const toast = $('#toast');

function normalizeUrl(value) {
  const candidate = /^https?:\/\//i.test(value.trim()) ? value.trim() : `https://${value.trim()}`;
  return new URL(candidate).origin;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('lt-is-visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('lt-is-visible'), 1800);
}

function renderChecks(checks) {
  checksGrid.innerHTML = checks.map((item) => `
    <article class="lt-check-card ${item.state === 'warning' ? 'lt-is-warning' : item.state === 'error' ? 'lt-is-error' : ''}"> <div class="lt-check-card-top"><span>${item.label}</span><b>${item.value}</b></div> <h4>${item.title}</h4> <p>${item.copy}</p> </article>
  `).join('');
}

function loadingResult(domain) {
  resultSection.hidden = false;
  resultTitle.textContent = domain;
  scoreValue.textContent = '…';
  statusPill.textContent = 'Checking';
  statusTitle.textContent = 'Loading llms.txt';
  statusCopy.textContent = 'Checking availability, structure, and links.';
  checksGrid.innerHTML = Array.from({ length: 4 }, (_, index) => `
    <article class="lt-check-card"><div class="lt-check-card-top"><span>0${index + 1}</span><b>…</b></div><h4>Checking</h4><p>Collecting data from the site.</p></article>
  `).join('');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderResult(data) {
  const found = data.exists;
  scoreValue.textContent = data.score;
  statusPill.textContent = found ? 'File found' : 'File not found';
  statusPill.style.color = found ? '' : '#f7c45c';
  statusTitle.textContent = found ? 'llms.txt is available' : 'You need to create llms.txt';
  statusCopy.textContent = found
    ? `The file returned status ${data.status}. The structure and notes are below.`
    : `At ${data.checkedUrl} file not found. The generator will prepare a starting point.`;
  resultCta.textContent = found ? 'Update the file' : 'Generate file';
  renderChecks(data.checks);
}

checkForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = $('button[type="submit"]', checkForm);
  try {
    const origin = normalizeUrl($('#site-url').value);
    button.disabled = true;
    button.textContent = 'Checking…';
    loadingResult(origin.replace(/^https?:\/\//, ''));
    const response = await fetch(`/api/tools/llms-check?url=${encodeURIComponent(origin)}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'We could not check the site');
    renderResult(data);
    $('#project-url').value = origin;
    if (!$('#project-name').value.trim() || $('#project-name').value === 'HITZ Agency') {
      $('#project-name').value = new URL(origin).hostname.replace(/^www\./, '');
    }
  } catch (error) {
    scoreValue.textContent = '-';
    statusPill.textContent = 'Error';
    statusPill.style.color = '#ff716b';
    statusTitle.textContent = 'The site could not be checked';
    statusCopy.textContent = error.message;
    renderChecks([
      { label: 'Availability', value: 'Error', state: 'error', title: 'No response', copy: 'Check the site URL and try again.' }
    ]);
  } finally {
    button.disabled = false;
    button.innerHTML = 'Check <span aria-hidden="true">↗</span>';
  }
});

$$('.lt-mode-button').forEach((button) => {
  button.addEventListener('click', () => {
    $$('.lt-mode-button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('lt-is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    if (button.dataset.mode === 'generate') {
      $('#generator').scrollIntoView({ behavior: 'smooth' });
    } else {
      $('#site-url').focus();
    }
  });
});

function absoluteUrl(origin, path) {
  try { return new URL(path.trim(), origin).href; }
  catch { return path.trim(); }
}

$('#generator-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = $('#project-name').value.trim();
  const origin = normalizeUrl($('#project-url').value);
  const description = $('#project-description').value.trim();
  const pages = $('#project-pages').value.split('\n').map((line) => line.trim()).filter(Boolean);
  const links = pages.map((line) => {
    const [path, label] = line.split('|').map((part) => part.trim());
    const href = absoluteUrl(origin, path);
    return `- [${label || path}](${href})`;
  }).join('\n');
  const output = `# ${name}\n\n> ${description}\n\n## Key pages\n\n${links}\n`;
  $('#generated-code').textContent = output;
  $('#code-preview').hidden = false;
  $('#code-preview').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

$('#copy-code').addEventListener('click', async () => {
  const text = $('#generated-code').textContent;
  let copied = false;
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch (error) {}
  if (!copied) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    copied = document.execCommand('copy');
    area.remove();
  }
  showToast(copied ? 'File copied' : 'Copy failed');
});

$('#download-code').addEventListener('click', () => {
  const blob = new Blob([$('#generated-code').textContent], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'llms.txt';
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 500);
  showToast('Download started');
});
