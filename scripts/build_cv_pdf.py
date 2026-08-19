"""Generate the published CV PDF from public-safe portfolio copy.

Requires ReportLab. Run from the repository root with:
    python scripts/build_cv_pdf.py
"""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Flowable,
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)
from reportlab.pdfgen import canvas


# This maintained script lives one level below the repository root.
ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "public" / "cv" / "Nazmus-Sakib-Abir-CV.pdf"

NAVY = colors.HexColor("#182A3A")
TEAL = colors.HexColor("#0B656D")
INK = colors.HexColor("#1C2834")
MUTED = colors.HexColor("#516374")
LINE = colors.HexColor("#A9BBC7")


class CVCanvas(canvas.Canvas):
    """Adds a restrained footer after total page count is known."""

    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        page_count = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self._draw_footer(page_count)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def _draw_footer(self, page_count):
        width, _ = letter
        self.setStrokeColor(TEAL)
        self.setLineWidth(0.55)
        self.line(45, 31, width - 45, 31)
        self.setFillColor(MUTED)
        self.setFont("Helvetica", 7.9)
        self.drawString(45, 18, "Nazmus Sakib Abir  |  AI/ML Engineer")
        footer = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(width - 45, 18, footer)


def make_styles():
    styles = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "CVName",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=25.0,
            leading=27.5,
            textColor=NAVY,
            spaceAfter=0,
        ),
        "role": ParagraphStyle(
            "CVRole",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11.8,
            leading=14.3,
            textColor=TEAL,
            spaceAfter=1.8,
        ),
        "contact": ParagraphStyle(
            "CVContact",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.4,
            leading=11.8,
            textColor=MUTED,
            spaceAfter=7.0,
        ),
        "section": ParagraphStyle(
            "CVSection",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.2,
            leading=12.7,
            textColor=TEAL,
            spaceBefore=10.0,
            spaceAfter=3.2,
            tracking=0.55,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "CVBody",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.25,
            leading=13.55,
            textColor=INK,
            spaceAfter=4.6,
        ),
        "entry": ParagraphStyle(
            "CVEntry",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.1,
            leading=12.7,
            textColor=INK,
            spaceBefore=7.0,
            spaceAfter=1.1,
        ),
        "roleline": ParagraphStyle(
            "CVRoleLine",
            parent=styles["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=9.9,
            leading=12.3,
            textColor=TEAL,
            spaceAfter=3.0,
        ),
        "bullet": ParagraphStyle(
            "CVBullet",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.9,
            leading=12.45,
            textColor=INK,
            leftIndent=14.0,
            firstLineIndent=0,
            bulletIndent=1.0,
            bulletFontName="Helvetica",
            bulletFontSize=9.0,
            bulletColor=TEAL,
            spaceAfter=2.35,
        ),
        "project": ParagraphStyle(
            "CVProject",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.0,
            leading=13.1,
            textColor=INK,
            spaceBefore=7.0,
            spaceAfter=1.8,
        ),
        "project_tags": ParagraphStyle(
            "CVProjectTags",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.4,
            leading=9.8,
            textColor=TEAL,
            spaceBefore=0,
            spaceAfter=1.7,
        ),
        "label": ParagraphStyle(
            "CVLabel",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.0,
            leading=13.0,
            textColor=INK,
            spaceAfter=2.8,
        ),
    }


def section_heading(styles, title):
    return [
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.55,
            color=LINE,
            spaceBefore=0,
            spaceAfter=4.0,
        ),
    ]


def entry(styles, company, period, role, bullets):
    flowables = [
        Paragraph(
            f"<b>{company}</b><font color='#516374'>  |  </font><font color='#516374'><b>{period}</b></font>",
            styles["entry"],
        ),
        Paragraph(role, styles["roleline"]),
    ]
    flowables.extend(
        Paragraph(item, styles["bullet"], bulletText="\u2022") for item in bullets
    )
    return [KeepTogether(flowables)]


def project(styles, title, period, summary, tags):
    return KeepTogether(
        [
            Paragraph(
                f"<b>{title}</b><font color='#516374'>  |  </font><font color='#516374'><b>{period}</b></font><br/>"
                f"{summary}",
                styles["project"],
            ),
            Paragraph(tags, styles["project_tags"]),
        ]
    )


def labeled_line(styles, label, value):
    return Paragraph(
        f"<b><font color='#182A3A'>{label}:</font></b> {value}", styles["label"]
    )


def build():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    styles = make_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=letter,
        leftMargin=45,
        rightMargin=45,
        topMargin=42,
        bottomMargin=53,
        title="Nazmus Sakib Abir - CV",
        author="",
        subject="AI/ML Engineer CV",
        creator="",
    )

    story = [
        Paragraph("Nazmus Sakib Abir", styles["name"]),
        Paragraph("AI/ML Engineer | Technical Lead", styles["role"]),
        Paragraph(
            "Dhaka, Bangladesh  |  nsabir2011@gmail.com  |  "
            "<link href='https://www.linkedin.com/in/nsabir2011/'>linkedin.com/in/nsabir2011</link>  |  "
            "<link href='https://github.com/nsabir2011'>github.com/nsabir2011</link>",
            styles["contact"],
        ),
        HRFlowable(
            width="100%", thickness=1.05, color=TEAL, spaceBefore=0, spaceAfter=8.0
        ),
    ]

    story += section_heading(styles, "Professional Summary")
    story.append(
        Paragraph(
            "Applied AI/ML engineer with professional experience since 2018, building practical systems across computer vision, generative AI, and multimodal RAG. Combines technical leadership with hands-on delivery across model research, Python services, product interfaces, cloud deployment, and operational optimization.",
            styles["body"],
        )
    )

    story += section_heading(styles, "Core Strengths")
    story += [
        labeled_line(
            styles,
            "End-to-end AI delivery",
            "Model research and evaluation, computer vision, generative AI, multimodal RAG, REST APIs, product interfaces, deployment, and operations.",
        ),
        labeled_line(
            styles,
            "Technical leadership",
            "Project proposal, team guidance, demos, research documentation, mentoring, and stakeholder communication under real hardware, data, licensing, and time constraints.",
        ),
    ]

    story += section_heading(styles, "Professional Experience")
    story += entry(
        styles,
        "Chowa Giken Corporation | Japan",
        "Oct 2022 - Present",
        "AI/ML Engineering | Technical-Development Leadership",
        [
            "Own applied research and product development across multimodal RAG, generative AI, computer vision, backend services, interfaces, and cloud deployment.",
            "Propose and lead technical-development initiatives from model investigation and <b>proof of concept through demonstrations and production-oriented delivery</b>.",
            "Develop and optimize AI pipelines under GPU memory, latency, data availability, commercial-use, and delivery-time constraints.",
            "Lead or contribute directly to document intelligence, explainable forecasting, generative image workflows, anomaly detection, and AI demo platforms.",
            "Contributed to <b>three patent applications</b>, with <b>lead contributions to two</b>; also support technical documentation, mentoring, and external presentations.",
        ],
    )
    story += entry(
        styles,
        "MononAI Limited",
        "Jun 2018 - 2022",
        "Full Stack Developer | Deep Learning Engineer",
        [
            "<b>Built the entire production AI and backend</b> for a real-time multi-camera face-intelligence product.",
            "Built computer-vision systems spanning face recognition, vehicle detection, ANPR, REST APIs, databases, caching, and WebSocket interactions.",
            "Improved <b>recognition accuracy and multi-camera throughput</b>, query performance, and application responsiveness while expanding into full-stack product delivery.",
            "Delivered frontend features and workflow improvements, including a substantial registration-system redesign.",
        ],
    )

    story += section_heading(styles, "Project Highlights")
    story += [
        project(
            styles,
            "Visual Response RAG",
            "2024 - 2026",
            "Proposed and led <b>two generations of document-chat systems</b> that combine written answers with relevant source visuals; <b>contributed to a related patent application</b> alongside hands-on engineering, demos, and team guidance.",
            "RAG | OCR | LLMs | Technical leadership | Patent application",
        ),
        project(
            styles,
            "Forecast Explainability",
            "2024",
            "Led development of an AI system that provides useful context around forecast-model predictions, spanning solution design, demonstration, and <b>a contribution to a related patent application</b>.",
            "Explainable AI | LLMs | Technical leadership | Patent application",
        ),
    ]

    story.append(PageBreak())
    story += section_heading(styles, "Project Highlights (Continued)")
    story += [
        project(
            styles,
            "Vision Inference Optimization",
            "2023",
            "Optimized a 360-degree image-processing pipeline in about one week, making it <b>more than three times faster</b> without retraining or changing its outputs.",
            "Computer vision | PyTorch | Performance",
        ),
        project(
            styles,
            "Generative Floorplan Development",
            "2025 - 2026",
            "<b>Led first-stage base-floorplan preparation</b> for constrained floorplan generation, then drove model development and evaluation, REST API delivery, deployment, and <b>contributed to a related patent application</b>.",
            "Generative AI | Image generation | FastAPI | Patent application",
        ),
        project(
            styles,
            "Product Anomaly Detection",
            "2023 - 2024",
            "Led Bangladesh engineering contributions across backend and React interface development for data upload, model training, inference, and product performance improvements.",
            "Anomaly detection | React | Backend",
        ),
        project(
            styles,
            "Multi-Camera Face Intelligence",
            "2018 - 2022",
            "<b>Built the entire production AI and backend system</b> for real-time CCTV face monitoring, then expanded into performance optimization and full-stack product improvements.",
            "Face recognition | Real-time systems | Backend ownership",
        ),
        project(
            styles,
            "Generative House Exterior",
            "2025 - 2026",
            "Developed model workflows for generating <b>consistent house-exterior views from elevation plans</b> while following supplied textures and design requirements.",
            "Image generation | Multi-view",
        ),
    ]

    story += section_heading(styles, "Technical Skills")
    story += [
        labeled_line(
            styles,
            "AI and ML",
            "Computer Vision, Face Recognition, Anomaly Detection, Object Detection, Object Tracking, Segmentation, Video Analytics, ANPR, Generative AI, Multimodal RAG, OCR.",
        ),
        labeled_line(
            styles,
            "Frameworks",
            "Python, PyTorch, OpenCV, Hugging Face Diffusers, PEFT, TensorRT, vLLM, LangChain, LangGraph.",
        ),
        labeled_line(
            styles,
            "Engineering",
            "FastAPI, Flask, REST APIs, WebSockets, React, Next.js, JavaScript, Docker, Linux, Git, Shell.",
        ),
        labeled_line(
            styles,
            "Cloud and data",
            "Google Cloud, Azure, Nginx, PostgreSQL, MongoDB, SQLite, Redis.",
        ),
    ]

    story += section_heading(styles, "Education and Certification")
    story += [
        labeled_line(
            styles,
            "BSc, Electrical and Electronic Engineering",
            "BRAC University | 2014 - 2018 | CGPA 3.67",
        ),
        labeled_line(
            styles,
            "Google Cloud Associate Cloud Engineer",
            "Completed by 2025",
        ),
    ]

    story += section_heading(styles, "Public Work and Leadership")
    story += [
        Paragraph(
            "Authored the 2024 technical article, \"Combating the Malicious Use of AI-Powered Image Editing.\"",
            styles["bullet"],
            bulletText="\u2022",
        ),
        Paragraph(
            "Contributed to public project overviews and a demonstration for Visual Response RAG and Forecast Visualization AI.",
            styles["bullet"],
            bulletText="\u2022",
        ),
        Paragraph(
            "Since 2025, helped conduct <b>two annual university AI teaching and mentoring cohorts</b> at BRAC University.",
            styles["bullet"],
            bulletText="\u2022",
        ),
        Paragraph(
            "Prepared <b>approximately one-third of the first cohort's lecture material</b> and delivered sessions shared with BRAC University and North South University students.",
            styles["bullet"],
            bulletText="\u2022",
        ),
        Paragraph(
            "Supported a mentored group that <b>won a program final prize</b>, alongside research documentation and junior-engineer support.",
            styles["bullet"],
            bulletText="\u2022",
        ),
    ]

    doc.build(story, canvasmaker=CVCanvas)
    print(OUTPUT_PATH)


if __name__ == "__main__":
    build()
