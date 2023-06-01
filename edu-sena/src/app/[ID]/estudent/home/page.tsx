import Image from "next/image";
import Script from "next/script";

export default function home() {
    return (
        <>
            <header>
                <hgroup>
                    <h1>Classless example</h1>
                    <h2>Just a pure semantic HTML markup, without <code>.classes</code></h2>
                </hgroup>
                <nav>
                    <ul>
                        <li>
                            <details role="list">
                                <summary aria-haspopup="listbox" role="button">Theme</summary>
                                <ul role="listbox">
                                    <li><a href="#" data-theme-switcher="auto">Auto</a></li>
                                    <li><a href="#" data-theme-switcher="light">Light</a></li>
                                    <li><a href="#" data-theme-switcher="dark">Dark</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details role="list">
                                <summary aria-haspopup="listbox">Examples (v1)</summary>
                                <ul role="listbox">
                                    <li><a href="../v1-preview/">Preview</a></li>
                                    <li><a href="../v1-preview-rtl/">Right-to-left</a></li>
                                    <li><a href="../v1-classless/">Classless</a></li>
                                    <li><a href="../v1-basic-template/">Basic template</a></li>
                                    <li><a href="../v1-company/">Company</a></li>
                                    <li><a href="../v1-google-amp/">Google Amp</a></li>
                                    <li><a href="../v1-sign-in/">Sign in</a></li>
                                    <li><a href="../v1-bootstrap-grid/">Bootstrap grid</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>

                <section id="preview">
                    <h2>Preview</h2>
                    <p>
                        Sed ultricies dolor non ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla
                        iaculis eros a elit pharetra egestas.
                    </p>
                    <form>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="First name"
                            aria-label="First name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            aria-label="Email address"
                            required
                        />
                        <fieldset>
                            <label htmlFor="terms">
                                <input type="checkbox" role="switch" id="terms" name="terms" />
                                I agree to the <a href="#" >Privacy Policy</a>
                            </label>
                        </fieldset>
                        <button type="submit">Subscribe</button>
                    </form>
                </section>

                <section id="typography">
                    <h2>Typography</h2>
                    <p>
                        Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget efficitur feugiat.
                        Vivamus porta nunc a erat mattis, mattis feugiat turpis pretium. Quisque sed tristique
                        felis.
                    </p>


                    <h3>Lists</h3>
                    <ul>
                        <li>Aliquam lobortis lacus eu libero ornare facilisis.</li>
                        <li>Nam et magna at libero scelerisque egestas.</li>
                        <li>Suspendisse id nisl ut leo finibus vehicula quis eu ex.</li>
                        <li>Proin ultricies turpis et volutpat vehicula.</li>
                    </ul>


                    <h3>Inline text elements</h3>
                    <figure>
                        <table>
                            <tbody>
                                <tr>
                                    <td><a href="#">Link</a></td>
                                    <td><strong>Bold</strong></td>
                                    <td><em>Italic</em></td>
                                </tr>
                                <tr>
                                    <td><u>Underline</u></td>
                                    <td><del>Deleted</del></td>
                                    <td><ins>Inserted</ins></td>
                                </tr>
                                <tr>
                                    <td><s>Strikethrough</s></td>
                                    <td><small>Small </small></td>
                                    <td><abbr title="Abbreviation" data-tooltip="Abbreviation">Abbr.</abbr></td>
                                </tr>
                                <tr>
                                    <td>Text <sub>Sub</sub></td>
                                    <td>Text <sup>Sup</sup></td>
                                    <td><kbd>Kbd</kbd></td>
                                </tr>
                                <tr>
                                    <td><mark>Highlighted</mark></td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>


                    <h3>Heading 3</h3>
                    <p>
                        Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis ipsum, at efficitur
                        sem scelerisque vel. Aliquam auctor diam ut purus cursus fringilla. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <h4>Heading 4</h4>
                    <p>
                        Cras fermentum velit vitae auctor aliquet. Nunc non congue urna, at blandit nibh. Donec ac
                        fermentum felis. Vivamus tincidunt arcu ut lacus hendrerit, eget mattis dui finibus.
                    </p>
                    <h5>Heading 5</h5>
                    <p>
                        Donec nec egestas nulla. Sed varius placerat felis eu suscipit. Mauris maximus ante in
                        consequat luctus. Morbi euismod sagittis efficitur. Aenean non eros orci. Vivamus ut diam
                        sem.
                    </p>
                    <h6>Heading 6</h6>
                    <p>
                        Ut sed quam non mauris placerat consequat vitae id risus. Vestibulum tincidunt nulla ut
                        tortor posuere, vitae malesuada tortor molestie. Sed nec interdum dolor. Vestibulum id
                        auctor nisi, a efficitur sem. Aliquam sollicitudin efficitur turpis, sollicitudin
                        hendrerit ligula semper id. Nunc risus felis, egestas eu tristique eget, convallis in
                        velit.
                    </p>


                    <figure>
                        <Image
                            src="data:image/jpeg;base64,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"
                            alt="Minimal landscape"
                            width={200}
                            height={200}
                        />
                        <figcaption>
                            Image from
                            <a href="https://unsplash.com/photos/a562ZEFKW8I" target="_blank">unsplash.com</a>
                        </figcaption>
                    </figure>
                </section>

                <section id="button">
                    <h2>Button</h2>
                    <button>Primary</button>
                </section>

                <section id="form">
                    <form>
                        <h2>Form elements</h2>

                        <label htmlFor="search">Search</label>
                        <input type={"search"} id="search" name="search" placeholder="Search" />


                        <label htmlFor="text">Text</label>
                        <input type="text" id="text" name="text" placeholder="Text" />
                        <small>Curabitur consequat lacus at lacus porta finibus.</small>


                        <label htmlFor="select">Select</label>
                        <select id="select" name="select" required>
                            <option value="" selected>Select…</option>
                            <option>…</option>
                        </select>


                        <label htmlFor="file"
                        >File browser
                            <input type="file" id="file" name="file" />
                        </label>


                        <label htmlFor="range"
                        >Range slider
                            <input type="range" min="0" max="100" value="50" id="range" name="range" />
                        </label>


                        <label htmlFor="valid">
                            Valid
                            <input type="text" id="valid" name="valid" placeholder="Valid" aria-invalid="false" />
                        </label>


                        <label htmlFor="invalid">
                            Invalid
                            <input
                                type="text"
                                id="invalid"
                                name="invalid"
                                placeholder="Invalid"
                                aria-invalid="true"
                            />
                        </label>


                        <label htmlFor="disabled">
                            Disabled
                            <input type="text" id="disabled" name="disabled" placeholder="Disabled" disabled />
                        </label>


                        <label htmlFor="date"
                        >Date
                            <input type="date" id="date" name="date" />
                        </label>


                        <label htmlFor="time"
                        >Time
                            <input type="time" id="time" name="time" />
                        </label>


                        <label htmlFor="color"
                        >Color
                            <input type="color" id="color" name="color" value="#0eaaaa" />
                        </label>

                        <fieldset>
                            <legend><strong>Checkboxes</strong></legend>
                            <label htmlFor="checkbox-1">
                                <input type="checkbox" id="checkbox-1" name="checkbox-1" checked />
                                Checkbox
                            </label>
                            <label htmlFor="checkbox-2">
                                <input type="checkbox" id="checkbox-2" name="checkbox-2" />
                                Checkbox
                            </label>
                        </fieldset>


                        <fieldset>
                            <legend><strong>Radio buttons</strong></legend>
                            <label htmlFor="radio-1">
                                <input type="radio" id="radio-1" name="radio" value="radio-1" checked />
                                Radio button
                            </label>
                            <label htmlFor="radio-2">
                                <input type="radio" id="radio-2" name="radio" value="radio-2" />
                                Radio button
                            </label>
                        </fieldset>


                        <fieldset>
                            <legend><strong>Switches</strong></legend>
                            <label htmlFor="switch-1">
                                <input type="checkbox" id="switch-1" name="switch-1" role="switch" checked />
                                Switch
                            </label>
                            <label htmlFor="switch-2">
                                <input type="checkbox" id="switch-2" name="switch-2" role="switch" />
                                Switch
                            </label>
                        </fieldset>


                        <input type="reset" value="Reset" />
                        <input type="submit" value="Submit" />
                    </form>
                </section>

                <section id="tables">
                    <h2>Tables</h2>
                    <figure>
                        <table role="grid">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>
                </section>

                <section id="accordions">
                    <h2>Accordions</h2>
                    <details>
                        <summary>Accordion 1</summary>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna diam,
                            tincidunt nec porta sed, auctor id velit. Etiam venenatis nisl ut orci consequat, vitae
                            tempus quam commodo. Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
                            lectus rutrum quam hendrerit, in facilisis elit sollicitudin. Mauris pulvinar pulvinar
                            mi, dictum tristique elit auctor quis. Maecenas ac ipsum ultrices, porta turpis sit
                            amet, congue turpis.
                        </p>
                    </details>
                    <details open>
                        <summary>Accordion 2</summary>
                        <ul>
                            <li>Vestibulum id elit quis massa interdum sodales.</li>
                            <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
                            <li>Quisque sed eros non eros ornare elementum.</li>
                            <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
                        </ul>
                    </details>
                </section>

                <article id="article">
                    <h2>Article</h2>
                    <p>
                        Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed ultricies dolor non
                        ante vulputate hendrerit. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit
                        pharetra egestas. Nunc placerat facilisis cursus. Sed vestibulum metus eget dolor pharetra
                        rutrum.
                    </p>
                    <footer><small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small></footer>
                </article>

                <section id="progress">
                    <h2>Progress bar</h2>
                    <progress id="progress-1" value="25" max="100"></progress>
                    <progress id="progress-2"></progress>
                </section>

                <section id="loading">
                    <h2>Loading</h2>
                    <article aria-busy="true"></article>
                    <button aria-busy="true">Please wait…</button>
                </section>

            </main>

            <footer>
                <small
                >Built with <a href="https://picocss.com">Pico</a> •
                    <a href="https://github.com/picocss/examples/blob/master/v1-classless/index.html"
                    >Source code</a
                    ></small
                >
            </footer>

            <Script src="js/minimal-theme-switcher.js"></Script>
        </>
    )
}