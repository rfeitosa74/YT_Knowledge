import { categoryOptions, languageOptions, priorityOptions, statusOptions, typeOptions } from '../data'
import { RatingStars } from './RatingStars'
import type { VideoItem } from '../types'

interface VideoFormProps {
  form: Omit<VideoItem, 'id' | 'createdAt'>
  setForm: (value: Omit<VideoItem, 'id' | 'createdAt'>) => void
  onSave: () => void
  onReset: () => void
}

export function VideoForm({ form, setForm, onSave, onReset }: VideoFormProps) {
  const update = <K extends keyof Omit<VideoItem, 'id' | 'createdAt'>>(key: K, value: Omit<VideoItem, 'id' | 'createdAt'>[K]) => {
    setForm({ ...form, [key]: value })
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Novo item</h3>
        <p className="text-sm text-slate-500">Cadastre vídeos, cursos ou referências de estudo.</p>
      </div>

      <div className="space-y-3">
        <input className="field" placeholder="Título" value={form.title} onChange={(e) => update('title', e.target.value)} />
        <input className="field" placeholder="Canal ou autor" value={form.channel} onChange={(e) => update('channel', e.target.value)} />
        <input className="field" placeholder="URL" value={form.url} onChange={(e) => update('url', e.target.value)} />

        <div className="grid gap-3 sm:grid-cols-2">
          <select className="field" value={form.category} onChange={(e) => update('category', e.target.value)}>
            {categoryOptions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <input className="field" placeholder="Subcategoria" value={form.subcategory} onChange={(e) => update('subcategory', e.target.value)} />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <select className="field" value={form.status} onChange={(e) => update('status', e.target.value as VideoItem['status'])}>
            {statusOptions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <select className="field" value={form.priority} onChange={(e) => update('priority', e.target.value as VideoItem['priority'])}>
            {priorityOptions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <select className="field" value={form.language} onChange={(e) => update('language', e.target.value)}>
            {languageOptions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <select className="field" value={form.type} onChange={(e) => update('type', e.target.value)}>
            {typeOptions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <input className="field" type="date" value={form.watchedAt} onChange={(e) => update('watchedAt', e.target.value)} />
          <input className="field" type="number" min="0" placeholder="Duração (min)" value={form.durationMinutes || ''} onChange={(e) => update('durationMinutes', Number(e.target.value) || 0)} />
        </div>

        <div>
          <p className="mb-2 text-sm text-slate-600">Avaliação</p>
          <RatingStars rating={form.rating} onChange={(value) => update('rating', value)} />
        </div>

        <textarea className="field min-h-[92px]" placeholder="Insight principal" value={form.insight} onChange={(e) => update('insight', e.target.value)} />
        <textarea className="field min-h-[92px]" placeholder="Ideia para testar" value={form.testIdea} onChange={(e) => update('testIdea', e.target.value)} />
        <textarea className="field min-h-[92px]" placeholder="Notas" value={form.notes} onChange={(e) => update('notes', e.target.value)} />
        <input className="field" placeholder="Tags separadas por vírgula" value={form.tags.join(', ')} onChange={(e) => update('tags', e.target.value.split(',').map((v) => v.trim()).filter(Boolean))} />

        <div className="flex gap-2">
          <button className="btn-primary flex-1" onClick={onSave}>Salvar</button>
          <button className="btn-secondary" onClick={onReset}>Limpar</button>
        </div>
      </div>
    </div>
  )
}
