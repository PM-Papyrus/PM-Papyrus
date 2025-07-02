
import matplotlib.pyplot as plt
import matplotlib.patches as patches

# ————————————————————————————————————————————
# ① dati di ingresso
risks = [
    ("TC1", 0.7, "C"),
    ("TC2", 0.2, "A"),
    ("TC3", 0.8, "C"),
    ("OR1", 0.6, "M"),
    ("OR2", 0.5, "M"),
    ("ES1", 0.8, "B"),
]
impact_map = {"B": 1, "M": 2, "A": 3, "C": 4}          # 1 = basso … 4 = critico

# ————————————————————————————————————————————
# ② setup figura (6×6) e quadranti
fig, ax = plt.subplots(figsize=(6, 6))
ax.set_facecolor("#282c34")                             # fondo scuro

# rettangoli dei quattro quadranti (mezzo-trasparenti)
ax.add_patch(patches.Rectangle((0, 2.5), 0.5, 2.5,   alpha=0.07, ec="none"))
ax.add_patch(patches.Rectangle((0.5, 2.5), 0.5, 2.5, alpha=0.07, ec="none"))
ax.add_patch(patches.Rectangle((0, 0), 0.5, 2.5,     alpha=0.04, ec="none"))
ax.add_patch(patches.Rectangle((0.5, 0), 0.5, 2.5,   alpha=0.04, ec="none"))

# linee centrali
ax.axhline(2.5, lw=0.8, alpha=0.4)
ax.axvline(0.5, lw=0.8, alpha=0.4)

# ————————————————————————————————————————————
# ③ scatter + annotazioni
for code, p, impact in risks:
    y = impact_map[impact]
    ax.scatter(p, y, s=60)
    ax.text(p, y + 0.15, code, ha="center")

# ————————————————————————————————————————————
# ④ estetica & assi
ax.set_xlim(0, 1);                ax.set_xticks([0, 0.5, 1])
ax.set_ylim(0.5, 4.5);            ax.set_yticks([1, 2, 3, 4])
ax.set_yticklabels(["Bassa", "Media", "Alta", "Critica"])
ax.set_xlabel("Probabilità");     ax.set_ylabel("Impatto")
ax.set_title("Matrice dei rischi", pad=15)
plt.tight_layout()
plt.savefig("risk_matrix.png", dpi=150)
plt.show()