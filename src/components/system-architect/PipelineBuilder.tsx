import { useState } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { GripVertical, X, Plus } from 'lucide-react';
import { pipelineCategories } from './types';

interface PipelineBuilderProps {
  selectedStages: string[];
  onStagesChange: (stages: string[]) => void;
  customStages: string[];
  onCustomStagesChange: (stages: string[]) => void;
}

const PipelineBuilder = ({
  selectedStages,
  onStagesChange,
  customStages,
  onCustomStagesChange,
}: PipelineBuilderProps) => {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customInput, setCustomInput] = useState('');

  const toggleStage = (stage: string) => {
    if (selectedStages.includes(stage)) {
      onStagesChange(selectedStages.filter((s) => s !== stage));
    } else {
      onStagesChange([...selectedStages, stage]);
    }
  };

  const addCustomStage = () => {
    const trimmed = customInput.trim();
    if (trimmed && !selectedStages.includes(trimmed) && !customStages.includes(trimmed)) {
      onCustomStagesChange([...customStages, trimmed]);
      onStagesChange([...selectedStages, trimmed]);
      setCustomInput('');
    }
  };

  const removeCustomStage = (stage: string) => {
    onCustomStagesChange(customStages.filter((s) => s !== stage));
    onStagesChange(selectedStages.filter((s) => s !== stage));
  };

  const allStages = [...selectedStages];

  return (
    <div className="space-y-5">
      {/* Stage selection by category */}
      {pipelineCategories.map((cat) => (
        <div key={cat.label}>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{cat.label}</p>
          <div className="grid grid-cols-2 gap-1.5">
            {cat.stages.map((stage) => {
              const isActive = selectedStages.includes(stage);
              return (
                <button
                  key={stage}
                  type="button"
                  onClick={() => toggleStage(stage)}
                  className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all text-left ${
                    isActive
                      ? 'bg-[hsl(var(--golden))] text-white border-[hsl(var(--golden))]'
                      : 'bg-background text-foreground border-input hover:border-[hsl(var(--golden)/0.4)]'
                  }`}
                >
                  {stage}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Custom stage */}
      <div>
        <button
          type="button"
          onClick={() => setShowCustomInput(!showCustomInput)}
          className="text-xs font-semibold text-[hsl(var(--golden))] flex items-center gap-1 hover:underline"
        >
          <Plus size={12} /> Add Custom Stage
        </button>
        <AnimatePresence>
          {showCustomInput && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 flex gap-2"
            >
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addCustomStage()}
                placeholder="Enter custom stage name"
                className="flex-1 border border-input rounded-lg px-3 py-2 text-xs bg-background text-foreground placeholder:text-muted-foreground focus:border-[hsl(var(--golden))] outline-none"
              />
              <button
                type="button"
                onClick={addCustomStage}
                className="text-xs font-semibold px-3 py-2 rounded-lg bg-[hsl(var(--golden))] text-white"
              >
                Add
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ordered list */}
      {allStages.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-foreground mb-2">Your Pipeline Order</p>
          <p className="text-xs text-muted-foreground mb-3">Drag to reorder. This defines your automation trigger sequence.</p>
          <Reorder.Group axis="y" values={allStages} onReorder={onStagesChange} className="space-y-1.5">
            {allStages.map((stage, index) => (
              <Reorder.Item
                key={stage}
                value={stage}
                className="flex items-center gap-2 bg-background border border-input rounded-lg px-3 py-2 cursor-grab active:cursor-grabbing"
              >
                <GripVertical size={12} className="text-muted-foreground shrink-0" />
                <span className="text-xs font-bold text-[hsl(var(--golden))] w-5">{index + 1}.</span>
                <span className="text-xs text-foreground flex-1">{stage}</span>
                {customStages.includes(stage) && (
                  <button type="button" onClick={() => removeCustomStage(stage)} className="text-muted-foreground hover:text-destructive">
                    <X size={12} />
                  </button>
                )}
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      )}
    </div>
  );
};

export default PipelineBuilder;
