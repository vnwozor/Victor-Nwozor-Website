/* ===============================
   SIDEBAR OPEN / CLOSE
================================ */

const sidebar = document.querySelector('.js-sidebar');
const header = document.querySelector('.js-header');
const openBtn = document.querySelector('.js-open');
const closeBtn = document.querySelector('.js-close');
const main = document.querySelector('.js-main');

openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('me');
    header.classList.toggle('hey');
    main.classList.toggle('us');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('me');
    header.classList.toggle('hey');
    main.classList.toggle('us');
});

/* ===============================
   NAVIGATION + SECTION SWITCH
================================ */

const navItems = document.querySelectorAll('.js-nav');
const pages = document.querySelectorAll('.page');
const lines = document.querySelectorAll('.js-line');

navItems.forEach((nav, index) => {
    nav.addEventListener('click', () => {

        /* underline active nav */
        lines.forEach(line => line.classList.remove('active'));
        lines[index].classList.add('active');

        /* show correct section */
        const target = nav.dataset.target;

        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(target).classList.add('active');

        /* auto close sidebar on mobile */
        sidebar.classList.remove('me');
        header.classList.remove('hey');
        main.classList.remove('us');
    });
});




/* ===============================
   CONTACT BUTTON → CONTACT PAGE
================================ */

const contactBtn = document.querySelector('.js-contact-btn');

if (contactBtn) {
    contactBtn.addEventListener('click', () => {

        /* remove active state from all pages */
        pages.forEach(page => page.classList.remove('active'));

        /* show contact page */
        document.getElementById('contact').classList.add('active');

        /* reset nav underline */
        lines.forEach(line => line.classList.remove('active'));

        /* activate contact underline */
        document
            .querySelector('[data-target="contact"] .js-line')
            .classList.add('active');

        /* close sidebar (mobile) */
        sidebar.classList.remove('me');
        header.classList.remove('hey');
        main.classList.remove('us');
    });
}