// 1. PEGA AQUÍ TODAS TUS PALABRAS (pueden ser cientos)
const textoPalabras = "1legal, 1l3gal, 1l3g@l, 1l3g@l., abre chat privado, agrega, agrega en pv, " +
" agrégame al grupo, agrégame al priv, agrégueme, agg, agga, aggr, agre, al privado, al pv, angelitos, " + 
" baby, caldo d pollo, caldo de pollo, caldito, caldito de pollo, caldodepollo, cambio, cambia al priv, " + 
" cambia por, cambiar, cepe, chiquitas, chat privado, comparte link, conversación privada, c p, c.p, cpa, " + 
" cp0, cp*, cp-, cp., cp/, cpe, cpee, cpq, cpl, cpo, cpr, cpp, cpy, cpv, crear grupo, crear nuevo grupo, " + 
" dame tu número, dame tu usuario, dm, enlace, f0rb1dd3n, f0rb1dden, f0rb!dd3n, f0rb!dd3n!, f0rbidd3n, " + 
" f0rbidden, forb1dden, forb1dden!, forbidd3n, forb!dd3n, forb!dd3n!, fuera del grupo, grupo, grupo cerrado, " +
" grupo privado, grupos, hablar directo, hablar en privado, i!egal, i!eg@l, i!eg@l., i!l3g4l, i!l3g4l., " +
" i!l3g@l, i!l3g@l., i1egal, i1l3gal, i1l3g@l, i1l3g@l., i1l3g4l, i1l3g4l., il3gal, il3g@l, ile-g@l, ile-gal, " +
" ilegal, ilegal., ilega1, ilegaa, ile.gal, iiegall, illégal, inbox, interno, intercambia, intercambio, " +
" invita al grupo, invitación, kid, kidz, link, link de invitación, link del grupo, lolis, manda, manda dm, " +
" manda inbox, manda interno, manda mensaje, manda pv, mandame, mándame, mándame aparte, mándame directo, " + 
" mándame el contacto, mándame por fuera, mándalo, mándamelo, menores, metete al grupo, mini, nEnas, niñas, " +
" nuevo grupo, pasar link, pásalo, pásame contacto, pásame interno, pásame link, peque, peques, pollito, " +
" pollos, pre, priv, priv., privado, privv, prib, prv, prv., prive, pr0-h1b1d0, pr0-h1b!do, pr0-h1b1do, " +
" pr0h1bid0, pr0h1b1do, pr0h1b!d0, pr0h1b!do, pr0h1b1d0!, pr0h!b1d0, pr0h!b1d0!, pr0hib!d0, pr0hib!do, " +
" pr0hibid0, pr0hibid0!, pr0hibido, pr0hibido., proh1b1do, proh1b1d0, s p, sep, sepe, súbeme al grupo, " +
" swap, trade, trading, trueque, unete, únete, unirse, únase, únanse, under, underage, chat hot, " +
"xat hot, chathot, chat🔥, hot chat, hotchat, chat erotico, chat +18, chat xxx, chat xxx 🔞, " +
"charla hot, conversacion hot, chat subido de tono, chat sexual, chat privado +18, hot 🔞, " +
"caliente chat, chat picante, chat travieso, chat de adultos, chat 🔥 privado, hot privado, " +
"privado hot, chat hot boys, chat hot girls, sala hot, grupo hot, c.h.a.t hot, ch@t hot, ch4t hot, " +
"chat h0t, h0t chat, shat hot, hotc, charlemos hot, hablar hot, rol hot, rol +18, rol spicy, " +
"charla spicy, chat ardiente, intercambiar, intercambio, intercambio de fotos, intercambio de redes, " +
"intercambiar redes, intercambiar ig, intercambiar insta, intercambiar tiktok, intercambio de contactos, " +
"cambiar redes, pasar redes, comparto red, te paso mi red, paso insta, paso telegram, paso numero, " +
"pásame tu red, pásame tu insta, intercambio privado, intercambio mutual, hagamos intercambio, " +
"hacemos intercambio, int3rcambiar, inter.cambiar, interc@mbiar, cambiar x redes, trade, exchange, " +
"trade pics, swap, swap pics, intercambio 🔒, paso ig, paso tg, paso snap, paso contacto, te paso mi @, " +
"pásame el tuyo, dm?, manden mensajes, manden mensaje, manden msg, manden msj, manden mje, " +
"manden menzaje, manden mensaj, manden menz, manden mens, mandenme mensaje, mandenme msj, mánden mensaje, " +
"mándenme mensaje, mndn mensaje, m@nden mensaje, m4nden mensaje, m4ndn mensaje, m4nd3n mensaje, " +
"mand3n mensaje, mndn mnsj, manden mnsje, manden mnsj, manden m3nsaje, manden mnsag, mandn mensj, " +
"manden menzaj, mándn mensaje, mandenme mje, mandnme mensaje, manden m3nsj, mandenme m3nsaj, " +
"mándeme mensaje, manden mensajito, mándenme msg, envien mensaje, envien dm, manden inbox, " +
"hablen al privado, al privado pls, escribeme al dm, mandenme al dm, dm abierto, mensaje privado, " +
"mandenme por privado, hablen x privado, al pv, pv abierto, m@nden mensaje, m4nden mensaje, mndn mensaje, " +
"manden mje, manden msj, manden msg, al d.m., al pv, escribeme al ig, msjme, inbox, en el dm, " +
"pasate al privado, talk in dm, hit me up, text me, send me msg, shoot me a dm, int3rcambio, " +
"int3rcambiar, interc@mbio, interc@mbiar, interc4mbio, interc4mbiar, intercambi0, intercambi4r, " +
"intercamb1o, int3r.cambio, in t3rcambio, in t3r cambio, in t3r.c4mbio, in t3r c4ambi0, in t3r c4ambi 0, " +
"in t3r c4ambi, in tercambio, inter camb1o, inter camb10, inter.cambi0, inter camvio, interkambio, " +
"intercanbio, inter canvio, interkamb1o, in terc4mbio, int3r camb10, int3r camvio, interc4mbi0, " +
"int3rc4mbi0, inter.c4mbi0, interc4mb10, int3rc4mbio, int3r camb1o, i n t e r c a m b i o, 1nt3rc4mbio, " +
"1nt3rc4mbi0, 1ntercambio, 1n t3r cambio, 1nt3r camb10, inter kambio, in t3r c4mbi0, intercamb10, " +
"inter cambi0, novia x novia, nxa, n x n, noviaxnovia, nva x nva, nva×nva, novia × novia, " +
"noviaxn0via, n0via x n0via, n0v1a x n0v1a, nov1a x nov1a, novya x novya, novia ✖ novia, " +
"novia ❌ novia, novia 💋 novia, novia 🔞 novia, novia 🩷 novia, novia 𝕩 novia, novias entre sí, " +
"relación novia x novia, novia con novia, amor entre novias, amor n x n, n x n relación, vendo contenido, " +
"vendo cont, vndo contenido, v3ndo contenido, vendo cont3nido, vndo cont, vnd0 contenido, vendo cont 🔥, " +
"vendo cont 💋, vendo cont 💦, vendo c0ntenido, vendo c0nt, vendo cont premium, vendo contenido premium, " +
"vendo contenido 18+, vendo contenido 🔞, vendo contenido nsfw, vendo contenido ex, vendo contenido exclusivo, " +
"vendo mi contenido, vendo mis fotos, vendo mis videos, vendo pack, vendo p4ck, vendo p@ck, vendo fotos hot, " +
"vendo fotos 🔥, vendo videos 🔞, vendo vids, vendo vids 🔞, vendo material, vendo material 🔞, " +
"vendo material exclusivo, vendo cositas, vendo cositas 🔞, vendo priv, vendo privado, vendo privados, " +
"vendo fotos priv, vendo fotos privadas, vendo vid privados, vendo f0t0s, vendo f0titos, " +
"vendo fotitos, vendo fotitos 🔞, vendo fts, vendo ft, vendo ft 🔥, vendo pics, vendo pics 🔥, " +
"vendo contenido xxx, vendo xxx, vendo contenido hot, vendo hot, vendo h0t, vendo cnt, vnd cnt, " +
"v.c., vc, vc 💋, vc 🔥, vendo c, vendo c🔥, vendo c💋, vnd c, vendo c0ntent, sell content, " +
"s3ll content, vendo nudes, vendo nudez, vendo fotos +18, vendo contenido +18, ofrezco contenido, " +
"ofrezco pack, ofrezco fotos, ofrezco cont 🔥, cont hot, c0nt hot, cont 🔥, cont 18+, cont ex, morbo a, " +
"m0rbo a, mrb a, mrbo a, mrb a, morbo con, me da morbo, tengo morbo, mucho morbo, da morbo, da m0rbo, " +
"m0rb0, morbo 🔥, morbo 💋, morbo 😈, morbo 😳, morbo 💦, morbo con tigo, morbo contigo, morbo cn tigo, " +
"morbo cn vos, morbo cn ustd, morbo cn ella, morbo cn él, morbo cn él 🔞, morbo cn ella 🔞, morbo cn eso, " +
"morbo entre, morbo entre nosotros, morbo entre nos, morbo entre nst, morbo nsfw, mrb🔥, mrb 😈, mrb 😳, " +
"morbo al priv, morbo al privado, morbo en el priv, morbo por priv, morbo x priv, morbo x privado, " +
"m0rbo al priv, m0rbo al privado, mrbo al priv, mrb al priv, mrb al privado, mrb x priv, morbo a priv, " +
"morbo por pv, morbo x pv, morbo pv, morbo pV, morbo al pV, mrb pv, mrb pr, mrb 🔥 priv, mrb 💋 pv, " +
"morbo 🔥 priv, morbo 😈 priv, morbo 💦 pv, morbo 💋 pv, morbo 18+ priv, morbo 18+ pv, morbo al dm, " +
"morbo al md, morbo por md, mrb dm, mrb md, mrb al md, morbo x md, morbo a mi prima, morbo a mi primo, " +
"morbo a mi hermana, morbo a mi hermano, morbo a mi madre, morbo a mi mamá, morbo a mi papá, " +
"morbo a mi padre, morbo a mi tía, morbo a mi tío, morbo a mi sobrina, morbo a mi sobrino, " +
"morbo a mi cuñada, morbo a mi cuñado, morbo a mi madrastra, morbo a mi padrastro, " +
"morbo a mi abuela, morbo a mi abuelo, morbo a mi suegra, morbo a mi suegro, morbo con mi prima, " +
"morbo con mi mamá, morbo con mi hermana, morbo con mi madre, morbo con mi tía, morbo con mi padre, " +
"morbo con mi cuñada, morbo con mi suegra, morbo familiar, morbo incestuoso, morbo en la familia, " +
"m0rbo a mi prima, mrbo a mi prima, mrb a mi prima, mrb a mi prma, mrb a mi pr1ma, mrb a mi prma 🔞, " +
"mrb a mi hrna, mrb a mi hrmna, mrb a mi mdr, mrb a mi mamá, mrb a mi tia, mrb a mi tia 🔥, " +
"mrb a mi cuñada, mrb cn mi prima, mrb cn mi mamá, mrb cn mi hrna, mrb cn mi tia, morbo cn mi prima, " +
"morbo cn mi mama, morbo cn mi hna, morbo cn mi tía, mrb fam, mrb flia, morbo flia, m0rbo fam, " +
"m0rbo flia, mrb flm, pásen cp, pasen cp, pásen c.p., pasen c.p., pásen c p, pasen c p, pásen cp, " +
"pasen cp, pásen c_p, pasen c_p, pásen c-p, pasen c-p, pásen cp al priv, pasen cp al priv, " +
"pásen cp al privado, pasen cp al privado, pásen cp por dm, pasen cp por dm, pásen cp por md, " +
"pasen cp por md, pásen cp por mensaje, pasen cp por mensaje, pásen cp por pv, pasen cp por pv, pásen link cp, " +
"pasen link cp, pásen link cp, pasen link cp, link cp, link c.p., link c p, link cp, cp link, cp vid, cp img, cp foto, " +
"cp grupo, cp group, cp tg, cp telegram, cp discord, cp discord link, cp leak, cp pack, cp pack gratis, cp pack🔞, " +
"cp hq, cp hd, cp full, menden cp, mánden cp, manden cp, mándame cp, pásame cp, pásame cp por dm, pásame cp al priv, " +
"mándame c.p., mándame c p, c0p, c0.p, c0_p, cp, c.p., c-p, c p, cpxxx, cp18, cP18, c_p18, cp💦, cp🔞, c*p💦, c.p.🔞, " +
"cp pack💦, pack cp🔞, cp pack gratis💦, cp leak💦, cp_pack, pack_cp, cp.zip, cp.rar, cp.tgz, cp_hd.zip, cp_hd.rar, " +
"cp_video.mp4, cp_img.zip, cp_pack_free, link cp, link c.p., cp link, cp tg, cp telegram, cp discord, cp discord link, " +
"cp group, cp grupo, cp en tg, cp en telegram, cp en discord, t.me/ + cp patterns, discord.gg/ + cp patterns, cp pack, " +
"cp leak, cp grp, cp pack gratis, cp leak gratis, cp hq, cp hd, cp full, loli pack, loli link, shota pack, shota link, " +
"send cp, send c.p., send loli, send shota, send minor pics, send minor link, enviar cp, enviar c.p., enviar link cp, " +
"enviar pack cp, enviar fotos menores, enviar vídeos menores, c p, c. p., c_p, c-p, c . p, c.p🔞, pasen cpe, pasen cpp, " +
"pasen c.p.p, pasen cpe al priv, pásen cppls, pásen c.p.s, fotos menores, vídeos menores, fotos de menores, fotos de niñas, " +
"fotos de niños, minor pics, minor link, niño pack, niña pack, menores link, pack + menor, link + menor, " +
"grupo + cp, tg + cp + pack, discord + cp + link, gratis + cp + pack, files + cp + (.zip .rar .mp4), " +
"vendo pack premium, vendo videos, vendo fotos, intercambio pack, trade pack, pack x pack, pack💦, pack gratis, " +
"pack nsfw, p4ck, p@ck, contenido 18+, contenido nsfw, n0rmal content, link 🔞, link only, link of, link of, " +
"pásen link, pásen material, pásen vid, pásen foto, pásen algo rico, role hot, rol +18, rol 🔥, rp hot, rp 🔞, rp nsfw, " +
"nsfw, nsfw chat, chat 🔞, chat hot, chat 18+, pido pack, pásen nudes, pásen fotos, nudes, nude, nude pack, nudez, " +
"pack de nudes, ofrezco videos, ofrezco fotos, servicio hot, servicio 🔥, fotos hot, contenido premium, contenido ex, " +
"contenido exclusivo, sugar daddy, sugar mami, busco sugar, pago por amor, pago por pack, 💵 por 💋, 💵💋, trabajo hot, " +
"trabajito 🔞, job 🔞, loli link, shota link, loli tg, shota tg, 1nt3rc4mb10, c/p, c-p, c3p3, s3p3, ccpp, canal, canales, " +
"links, vendo, v3nd0, ✍️, md, interni, 1nt3rn0, 👇👇🏻👇🏼👇🏽👇🏾👇🏿, $, venta, promo, promos, /pro, /help, /vip";

// 2. Función para generar los cuadros desplegables
function generarLista() {
    const container = document.getElementById("wordsContainer");
    if(!container) return;

    const allWords = textoPalabras.split(",")
        .map(w => w.trim())
        .filter(w => w !== "")
        .sort((a, b) => a.localeCompare(b));

    const groups = {};

    allWords.forEach(word => {
        const first = word[0].toUpperCase();
        const key = /[A-Z]/.test(first) ? first : "#";
        if (!groups[key]) groups[key] = [];
        groups[key].push(word);
    });

    container.innerHTML = "";
    Object.keys(groups).sort().forEach(letter => {
        const box = document.createElement("details");
        box.className = "palabra-box";
        box.innerHTML = `
            <summary>
                <h3>${letter} (${groups[letter].length})</h3>
                <span style="color:var(--primary)">▼</span>
            </summary>
            <ul>
                ${groups[letter].map(w => `<li>${w}</li>`).join("")}
            </ul>
        `;
        container.appendChild(box);
    });
}

// 3. Función para el buscador
function filterWords() {
    let input = document.getElementById('wordSearch').value.toLowerCase();
    let boxes = document.querySelectorAll('.palabra-box');

    boxes.forEach(box => {
        let items = box.querySelectorAll('li');
        let boxHasMatch = false;

        items.forEach(li => {
            if (li.textContent.toLowerCase().includes(input)) {
                li.style.display = "";
                boxHasMatch = true;
            } else {
                li.style.display = "none";
            }
        });

        if (input !== "" && boxHasMatch) {
            box.open = true;
        } else if (input === "") {
            box.open = false;
        }
        box.style.display = boxHasMatch ? "" : "none";
    });
}

// Iniciar al cargar
document.addEventListener("DOMContentLoaded", generarLista);