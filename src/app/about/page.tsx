import HeaderPage from "@/components/Header";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { RegularPage } from "@/types";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter } = data;
  const { title } = frontmatter;

  const contentVasu = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed. Fugit voluptatibus perspiciatis assumenda nulla ad nihil, omnis vel, doloremque sit quam autem optio maiores, illum eius facilis et quo consectetur provident dolor similique! Enim voluptatem dicta expedita veritatis repellat dolorum impedit, provident quasi at."
  const contentVansh = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed. Fugit voluptatibus perspiciatis assumenda nulla ad nihil, omnis vel, doloremque sit quam autem optio maiores, illum eius facilis et quo consectetur provident dolor similique! Enim voluptatem dicta expedita veritatis repellat dolorum impedit, provident quasi at."
  const imgVansh = "perspecta-images/about/imgVansh.png"
  const imgVasu = "perspecta-images/about/imgVasu.png"

  return (
    <>
      <HeaderPage
        title={"Welcome to Perspecta Labs"}
      />
      <section className="section-sm">
        <div className="container">
          <div className="flex flex-row gap-24 justify-center">
            <div className="text-center">
              {imgVansh && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={imgVansh}
                  width={300}
                  height={300}
                  alt={title}
                />
              )}
              <h2
                dangerouslySetInnerHTML={markdownify("Hey, I am Vansh Mehta")}
                className="h3 mb-6"
              />
              <div className="content">
                <MDXContent content={contentVansh} />
              </div>
            </div>
            <div className="text-center">
              {imgVasu && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={imgVasu}
                  width={300}
                  height={300}
                  alt={title}
                />
              )}
              <h2
                dangerouslySetInnerHTML={markdownify("Hey, I am Vasudev Vidyarthi")}
                className="h3 mb-6"
              />
              <div className="content">
                <MDXContent content={contentVasu} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
