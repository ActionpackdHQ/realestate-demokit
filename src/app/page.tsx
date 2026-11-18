import { Briefcase, CalendarCheck, FileText, Key } from "lucide-react";

import { CtaLink } from "@/components/cta-link";
import { DemoVideo } from "@/components/demo-video";
import {
  ACTIONPACKD_WHATSAPP_DISPLAY,
  CRESTORA_DEMO,
  HELLO_AGENT,
  PDF_HREF,
  PRODUCTS,
  REAL_ESTATE_WHATSAPP_TEXT,
  TRY_IT_YOURSELF,
  whatsAppHref,
} from "@/lib/site";

const agentChatHref = whatsAppHref(REAL_ESTATE_WHATSAPP_TEXT);

export default function Home() {
  return (
    <div className="kit">
      <section className="hero">
        <span className="tag">Actionpackd · Real estate</span>
        <h1>Every buyer enquiry, answered in seconds.</h1>
        <p>
          An AI agent on WhatsApp qualifies buyers — area, budget, BHK, timeline — shares project
          photos and brochures, and books site visits, day or night.
        </p>
        <CtaLink href={CRESTORA_DEMO} variant="secondary">
          See the live demo
        </CtaLink>
        <CtaLink href={TRY_IT_YOURSELF}>Try it yourself</CtaLink>
        <img
          src="/kit/hero-phone.webp"
          alt="Phone showing a WhatsApp chat about a property enquiry"
          width={720}
          height={1280}
        />
      </section>

      <h2>See it work</h2>
      <p>
        This is a sample chat with <b>Demo Project</b> (not a live listing).
      </p>
      <div className="chat">
        <div className="top">
          Demo Project (sample)
          <small>AI agent · online</small>
        </div>
        <div className="msgs">
          <div className="day">Today</div>
          <div className="b c">Hi, I saw the ad. Is anyone there?</div>
          <div className="b a">
            Yes. Which area are you looking in, and how many BHK?
            <div className="t">23:04</div>
          </div>
          <div className="b c">
            3 BHK, close to the office. This month if I can.
            <div className="t">23:05</div>
          </div>
          <div className="b a">
            I can share the project photos, the floor plan and the location, and book a site visit.
            Morning or evening?
            <div className="t">23:05</div>
          </div>
          <div className="b c">
            Sunday evening.
            <div className="t">23:06</div>
          </div>
          <div className="b a">
            Noted. I will send a reminder before the visit. Your team can join this chat.
            <div className="t">23:06</div>
          </div>
        </div>
      </div>
      <CtaLink href={TRY_IT_YOURSELF}>Try it yourself</CtaLink>

      <h2>Sample project</h2>
      <p>Your own photos go here. The agent sends them to buyers.</p>
      <div className="grid samples">
        <img
          src="/kit/villa.webp"
          alt="Sample photo of a villa exterior"
          width={800}
          height={800}
          loading="lazy"
        />
        <img
          src="/kit/living.webp"
          alt="Sample photo of a living room"
          width={800}
          height={800}
          loading="lazy"
        />
        <img
          src="/kit/model.webp"
          alt="Sample photo of an architectural model"
          width={800}
          height={800}
          loading="lazy"
        />
        <img
          className="phone"
          src="/kit/hero-phone.webp"
          alt="Phone showing a WhatsApp chat about a property enquiry"
          width={720}
          height={1280}
          loading="lazy"
        />
      </div>

      <h2>Agents, bots, shops, and sites</h2>
      <p>Give us the job. An agent, a bot, a shop, or a site does it.</p>
      {PRODUCTS.map((product) => (
        <div className="card" key={product.title}>
          <b>{product.title}</b>
          <br />
          {product.body}
        </div>
      ))}

      <h2>Watch in 30 seconds</h2>
      <DemoVideo />

      <h2 id="team">Your team that never sleeps</h2>
      <div className="team">
        <div className="card team-card">
          <span className="team-icon" aria-hidden="true">
            <Key />
          </span>
          <div>
            <b>Lead Qualifier</b>
            <p>
              Asks area, budget, BHK and timeline while the buyer is still excited. Only serious
              buyers reach you.
            </p>
          </div>
        </div>
        <div className="card team-card">
          <span className="team-icon" aria-hidden="true">
            <FileText />
          </span>
          <div>
            <b>Brochure Desk</b>
            <p>
              Sends photos, floor plans and the location pin the moment they ask. No &quot;will send
              tomorrow&quot;.
            </p>
          </div>
        </div>
        <div className="card team-card">
          <span className="team-icon" aria-hidden="true">
            <CalendarCheck />
          </span>
          <div>
            <b>Site Visit Booker</b>
            <p>
              Locks the Sunday visit and reminds them the night before, so no one forgets to show
              up.
            </p>
          </div>
        </div>
        <div className="card team-card">
          <span className="team-icon" aria-hidden="true">
            <Briefcase />
          </span>
          <div>
            <b>You still close the deal.</b>
            <p>Every chat is in front of you, and you can jump in whenever you want.</p>
          </div>
        </div>
      </div>

      <h2 id="try">Try the live demo</h2>
      <p>
        Crestora is the sample project site. Open it and chat with the AI agent that qualifies buyers
        and books the visit.
      </p>
      <CtaLink href={CRESTORA_DEMO}>Open the Crestora demo</CtaLink>
      <CtaLink href={PDF_HREF} download="Actionpackd-realestate-sheet.pdf" variant="outline">
        Download the 1-page sheet (PDF)
      </CtaLink>
      <CtaLink href={TRY_IT_YOURSELF} variant="secondary">
        Message us on WhatsApp to get it
      </CtaLink>

      <h2 id="contact">Contact</h2>
      <div className="card contact-card">
        <p className="contact-line">
          <a href={agentChatHref}>{ACTIONPACKD_WHATSAPP_DISPLAY}</a>
        </p>
      </div>
      <CtaLink href={HELLO_AGENT}>hello.actionpackd.com</CtaLink>

      <footer>Actionpackd · A sample project for this demo. Not a live listing.</footer>
    </div>
  );
}
