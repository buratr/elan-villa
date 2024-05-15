export async function loadJSPDF() {
    if (typeof window !== 'undefined') {
        if (!window.jspdf) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js';
            script.async = true;
            document.body.appendChild(script);
            await new Promise(resolve => script.onload = resolve);
        }
    }
}